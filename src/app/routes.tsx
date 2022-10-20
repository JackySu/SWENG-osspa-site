import * as React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import { accessibleRouteChangeHandler } from '@app/utils/utils';
import { Contribute } from '@app/Contribute/Contribute';
import { LearnMore } from '@app/Contribute/LearnMore';
import { Support } from '@app/Support/Support';
import { ArchitectureList } from '@app/ArchitectureList/ArchitectureList';
import { GeneralSettings } from '@app/Settings/General/GeneralSettings';
import { ProfileSettings } from '@app/Settings/Profile/ProfileSettings';
import { NotFound } from '@app/NotFound/NotFound';
import { useDocumentTitle } from '@app/utils/useDocumentTitle';
import { LastLocationProvider, useLastLocation } from 'react-router-last-location';
import { ArchitectureDetail } from '@app/ArchitectureDetail/ArchitectureDetail';
import { DetailRedirect } from '@app/ArchitectureDetail/DetailRedirect';
let routeFocusTimer: number;
export interface IAppRoute {
  label?: string; // Excluding the label will exclude the route from the nav sidebar in AppLayout
  /* eslint-disable @typescript-eslint/no-explicit-any */
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
  /* eslint-enable @typescript-eslint/no-explicit-any */
  exact?: boolean;
  path: string;
  title: string;
  isAsync?: boolean;
  routes?: undefined;
}

export interface IAppRouteGroup {
  label: string;
  routes: IAppRoute[];
}

export type AppRouteConfig = IAppRoute | IAppRouteGroup;

const routes: AppRouteConfig[] = [
  {
    component: ArchitectureList,
    exact: true,
    isAsync: true,
    label: 'Architecture List',
    path: '/',
    title: 'Portfolio Architecture | Architecture List Page',
  },
  {
    component: ArchitectureDetail,
    exact: true,
    isAsync: true,
    label: 'Architecture Detail',
    path: '/detail/:ppid',
    title: 'Portfolio Architecture | Architecture Detail',
  },
  {
    component: DetailRedirect,
    exact: true,
    isAsync: true,
    label: 'Architecture Detail - redirect',
    path: '/architecturedetail',
    title: 'Portfolio Architecture | Architecture Detail',
  },
  {
    component: Contribute,
    exact: true,
    label: 'Contribute',
    path: '/contribute',
    title: 'Portfolio Architecture | Contribute',
  },
  {
    component: LearnMore,
    exact: true,
    label: 'LearnMore',
    path: '/learnmore',
    title: 'Portfolio Architecture | Learn More',
  },
  
];

// a custom hook for sending focus to the primary content container
// after a view has loaded so that subsequent press of tab key
// sends focus directly to relevant content
const useA11yRouteChange = (isAsync: boolean) => {
  const lastNavigation = useLastLocation();
  React.useEffect(() => {
    if (!isAsync && lastNavigation !== null) {
      routeFocusTimer = accessibleRouteChangeHandler();
    }
    return () => {
      window.clearTimeout(routeFocusTimer);
    };
  }, [isAsync, lastNavigation]);
};

const RouteWithTitleUpdates = ({ component: Component, isAsync = false, title, ...rest }: IAppRoute) => {
  useA11yRouteChange(isAsync);
  useDocumentTitle(title);

  function routeWithTitle(routeProps: RouteComponentProps) {
    return <Component {...rest} {...routeProps} />;
  }

  return <Route render={routeWithTitle} {...rest}/>;
};

const PageNotFound = ({ title }: { title: string }) => {
  useDocumentTitle(title);
  return <Route component={NotFound} />;
};

const flattenedRoutes: IAppRoute[] = routes.reduce(
  (flattened, route) => [...flattened, ...(route.routes ? route.routes : [route])],
  [] as IAppRoute[]
);

const AppRoutes = (): React.ReactElement => (
  <LastLocationProvider>
    <Switch>
      {flattenedRoutes.map(({ path, exact, component, title, isAsync }, idx) => (
        <RouteWithTitleUpdates
          path={path}
          exact={exact}
          component={component}
          key={idx}
          title={title}
          isAsync={isAsync}
        />
      ))}
      <PageNotFound title="404 Page Not Found" />
    </Switch>
  </LastLocationProvider>
);

export { AppRoutes, routes };

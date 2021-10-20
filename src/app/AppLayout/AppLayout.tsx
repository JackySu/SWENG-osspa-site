import * as React from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import {
  
  Page,
  PageHeader,
  Nav,
  NavList,
  NavItem,
  SkipToContent
} from '@patternfly/react-core';
import logo from '@app/bgimages/logo.png';
interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children }) => {
  const [isMobileView, setIsMobileView] = React.useState(true);

  
  
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  function LogoImg() {
    const history = useHistory();
    function handleClick() {
      history.push('/');
    }
    return (
      <img src={logo} width="200" height="60" onClick={handleClick} alt="PA Logo" />
     
    );
  }

  const menuContent =(
    
    <Nav variant="horizontal">
        <NavList>
          <NavItem key={0} itemId={0} isActive={false} href="/">
            <a href="/">Portfolio Architecture</a>
          </NavItem>
          <NavItem key={1} itemId={1} isActive={false}  href="https://www.redhat.com/en/technologies/all-products">
            <a href="https://www.redhat.com/en/technologies/all-products">Red Hat Solutions</a>
          </NavItem>
          <NavItem key={2} itemId={2} isActive={false}  href="https://redhatdemocentral.gitlab.io/portfolio-architecture-tooling/">
            <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-tooling/">Our Tool</a>
          </NavItem>
          <NavItem key={3} itemId={3} isActive={false}  href="#">
            <a href="/contribute">Contribute</a>
          </NavItem>
        </NavList>
    </Nav>

          
      
  );

  const Header = (
    <PageHeader
      logo={<LogoImg />}
      topNav={menuContent}
    />
  );

  

  const location = useLocation();

  const Sidebar = (
   < p /> 
  );

  const pageId = 'primary-app-container';

  const PageSkipToContent = (
    <SkipToContent onClick={(event) => {
      event.preventDefault();
      const primaryContentContainer = document.getElementById(pageId);
      primaryContentContainer && primaryContentContainer.focus();
    }} href={`#${pageId}`}>
      Skip to Content
    </SkipToContent>
  );
  return (
    <Page
      mainContainerId={pageId}
      header={Header}
      sidebar={Sidebar}
      onPageResize={onPageResize}
      skipToContent={PageSkipToContent}>
      {children}
    </Page>
  );
}

export { AppLayout };

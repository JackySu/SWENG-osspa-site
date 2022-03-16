import * as React from 'react';
import { useEffect } from 'react';
import { RouteComponentProps, useLocation, useHistory } from 'react-router-dom';
import {
  
  Page,
  PageHeader,
  Nav,
  NavList,
  NavItem,
  SkipToContent,
  PageHeaderTools

} from '@patternfly/react-core';

import { useExternalScript } from "../utils/useExternalScript";

interface IAppLayout {
  children: React.ReactNode;
}

const AppLayout: React.FunctionComponent<IAppLayout> = ({ children}) => {
  const externalScript = "https://www.redhat.com/ma/dpal.js";
  const state = useExternalScript(externalScript);

  const [isMobileView, setIsMobileView] = React.useState(true);

  
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    setIsMobileView(props.mobileView);
  };

  function openRedHatWindow(e) {
    window.open("https://www.redhat.com/en/technologies/all-products");
  }
  function openToolWindow(e) {
    window.open("https://tool.osspa.org/");
  }
  function openArchitectWindow(e) {
    window.open("https://www.redhat.com/architect/");
  }

  function LogoImg() {
    const history = useHistory();
    function handleClick() {
      history.push('/');
    }
    return (
      <img src="/architect/portfolio/images/logo_redhat.png" width="200" height="60" onClick={handleClick} alt="Red Hat Logo" />
     
    );
  }

  const headerTools = (
    <PageHeaderTools>
      <img src="/architect/portfolio/images/palogo.png" width="150" height="50" alt="Red Hat Logo" />
      
    </PageHeaderTools>
  );

//enable architect  

  const menuContent =(
    
    <Nav variant="horizontal">
        <NavList>
          <NavItem key={0} itemId={0} isActive={false} href="/">
            <a href="/architect/portfolio">Portfolio Architecture</a>
          </NavItem>
          <NavItem key={1} itemId={1} isActive={false}  href="/">
            <a href="/architect/portfolio/contribute">Learn More</a>
          </NavItem>
          <NavItem key={2} itemId={2} isActive={false}  onClick={openToolWindow}>
            Our Tool
          </NavItem>
          <NavItem key={1} itemId={3} isActive={false}  href="/">
            <a href="/architect/portfolio/contribute#_contribute">Contribute</a>
          </NavItem>
          <NavItem key={1} itemId={3} isActive={false}  onClick={openArchitectWindow}>
            Enable Architect
          </NavItem>
          <NavItem key={3} itemId={4} isActive={false}  onClick={openRedHatWindow}>
            Red Hat Solutions
          </NavItem>
        </NavList>
    </Nav>

          
      
  );

  const Header = (
    <PageHeader
      logo={<LogoImg />}
      topNav={menuContent}
      headerTools={headerTools}
    />
  );

  

  

  const location = useLocation();

  

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

  function sendCustomEvent(evt: any) {
    if (document.createEvent && document.body.dispatchEvent) {
      var myEvent = document.createEvent('Event');
      myEvent.initEvent(evt, true, true); //can bubble, and is cancellable
      document.body.dispatchEvent(myEvent);
      //@ts-ignore
    } else if (window.CustomEvent && document.body.dispatchEvent) {
      //@ts-ignore
        var event = new CustomEvent(evt,
          { bubbles: true, cancelable: true }
        );
        document.body.dispatchEvent(event);
      }
    }

    useEffect(() => {
      // Call sendCustomEvent function when a new page is loaded:
      console.log("Call sendCustomEvent function when a new page is loaded:["+location.pathname+"] key:["+location.key+"] hash:["+location.hash+"]");
      sendCustomEvent("pageBottom");
    }, [location]);
  
  

  return (
    <Page
      mainContainerId={pageId}
      header={Header}
      //sidebar={Sidebar}
      onPageResize={onPageResize}
      skipToContent={PageSkipToContent}>
      {children}

      
    </Page>
  );
}

export { AppLayout };

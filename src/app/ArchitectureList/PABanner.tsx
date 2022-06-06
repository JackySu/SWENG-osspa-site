import React from "react";

import {
  Banner,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Text,
  TextVariants,
  Divider,
  Page
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';


class PABanner extends React.Component{

  
  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false
    };
   
}



render(){
  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    this.setState({ isMobileView: props.mobileView});
  
  };
  var learnMoreButton=<span class="banner_link_learn_more">
      <Button variant="link">
      <img width="200" height="25" src="/architect/portfolio/images/contribute_schematic1.png" alt="Learn More"></img>
      <br/><a href="/architect/portfolio/contribute">Learn More <ArrowRightIcon /></a>
      </Button>
      </span>;
      if(this.state.isMobileView === true) {
        learnMoreButton=<div></div>
        
      }
    
    return(
      <React.Fragment>
        <Page
          onPageResize={onPageResize}
          className="banner_page"
        >
         
      <Masthead id="light-masthead" backgroundColor="light">
      <MastheadMain>
        <MastheadBrand><img src="/architect/portfolio/images/site-logo.png" width={"230px"}/></MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <span class="middle_content">
        
          {" "}The Red Hat Portfolio Architecture Center showcases successful customer deployments of our open-source software, as well as provides architecture best practices, tools, and links to other associated resources to meet your innovative datacenter and cloud based business objectives.
          <Divider component="div"/>
          {/***latest blog entry / portfolio architecture product links below here:***/}
          <a href="https://www.redhat.com/en/blog/high-availability-sap-red-hat-enterprise-linux" target="_blank">
          <Text component={TextVariants.h6}>LATEST BLOG POST June 3, 2022: High Availability for SAP on Red Hat Enterprise Linux:</Text></a>
          Make critical environments more resilient by maximizing uptime and minimizing unplanned service disruptions.
          {/*********/} 
          <br/>
        </span>
        {learnMoreButton}
      </MastheadContent>
    </Masthead>
    
    </Page>
    </React.Fragment>
    );
}

}

export default PABanner;


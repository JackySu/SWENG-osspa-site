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
        <MastheadBrand><img src="/architect/portfolio/images/site-logo.png" width={"200px"}/></MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <span class="middle_content">
          <Text component={TextVariants.h2}>Red Hat Portfolio Architecture Center</Text>
          {" "}Showcases successful customer deployments of our open-source software, as well as provides architecture best practices, tools, and links to other associated resources to meet your innovative datacenter and cloud based business objectives.
          <Divider component="div"/>
          <a href="https://www.redhat.com/architect/self-healing-infrastructure" target="_blank"><Text component={TextVariants.h6}>LATEST BLOG POST April 7, 2022: How to architect a self-healing infrastructure:</Text></a>Use software to monitor your systems for anomalies, define remediation strategies, and deploy solutions as Ansible playbooks.
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


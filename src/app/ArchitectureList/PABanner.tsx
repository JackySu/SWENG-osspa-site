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
      <iframe width="200" height="25" src="https://www.youtube.com/embed/HEemD0HpY9Q" frameborder="0" allowfullscreen></iframe>
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
          {" "}Showcases successful customer deployments of our open source software, as well as architecture best practices and tools to meet your innovative datacenter and cloud based business objectives.
          <Divider component="div"/>
          <a href="https://www.redhat.com/architect/ai-edge-microshift" target="_blank"><Text component={TextVariants.h6}>NEW POST: How MicroShift and Kubernetes help manage edge devices at scale</Text></a>
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


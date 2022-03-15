import React from "react";

import {
  Masthead,
  MastheadToggle,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Text,
  TextVariants,
  Divider

} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';

class PABanner extends React.Component{

  constructor(props) {
    super(props);
    
   
}



render(){
    
    return(
      <Masthead id="light-masthead" backgroundColor="light">
      <MastheadMain>
        <MastheadBrand>Logo Placeholder</MastheadBrand>
      </MastheadMain>
      <MastheadContent>
        <span class="middle_content">
          <Text component={TextVariants.h2}>Red Hat Portfolio Architecture Center</Text>
          {" "}Showcases successful customer deployments of our open source software, as well as architecture best practices and tools to meet your innovative datacenter and cloud based business objectives.
          <Divider component="div"/>
          <Text component={TextVariants.h6}>PA Article ONE @Enable ARchitect</Text>
          <br/>
        </span>
        <span class="banner_link_learn_more">
        <Button variant="link">
          Learn More <ArrowRightIcon />
        </Button>
        </span>
      </MastheadContent>
    </Masthead>
    );
}

}

export default PABanner;


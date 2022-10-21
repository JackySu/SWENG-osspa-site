import React from 'react';

import {
    Banner,
    Brand,
    Text,
    TextVariants
  } from '@patternfly/react-core';
export default class Footer extends React.PureComponent {
    

    render() {
        return (
            
            <Banner className='footer_banner'>
                <br/>
                <Text component={TextVariants.p} className="footertext">
                The opinions expressed on this website are those of each author, not of the author's employer or of Red Hat. The content published on this site are community contributions and are for informational purpose only AND ARE NOT, AND ARE NOT INTENDED TO BE, RED HAT DOCUMENTATION, SUPPORT, OR ADVICE.
                <br/>
                <br/>
                Red Hat and the Red Hat logo are trademarks of Red Hat, Inc., registered in the United States and other countries.
                <br/>
                <br/>
                
                </Text>
                <Text component={TextVariants.p} className="footerCopyRighttext">
                    <Brand alt="rh-logo" className="footer-traditional-logo" src="https://www.redhat.com/profiles/rh/themes/redhatdotcom/img/logo.svg" />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; © 2021 Red Hat, Inc.        <a href="https://www.redhat.com/en/about/privacy-policy">Privacy statement</a>        |        <a href="https://www.redhat.com/en/about/terms-use">Terms of use</a>        |        <a href="https://www.redhat.com/en/about/all-policies-guidelines">All policies and guidelines</a>        |        <a href="https://www.redhat.com/en/about/digital-accessibility">Digital accessibility</a>       |       <a id="teconsent"></a> <span id="teconsent" ></span>
                    
                </Text>
                <br/>
                <br/>
                
            </Banner>
            
        );
    }
}
export { Footer };
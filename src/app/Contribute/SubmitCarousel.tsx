import * as React from 'react';
import { 
  Brand } from '@patternfly/react-core';

import { css } from '@patternfly/react-styles';
import '@app/react-asciidoc/fedora.css';
import { Carousel } from '@trendyol-js/react-carousel';

  
class SubmitCarousel extends React.Component {
  
  
  

  render() {

    
    return  <React.Fragment>
        
        
    
      <div>
        <Carousel show={3} slide={1} swiping={true}>
        <div>
          <h3>Submit Idea</h3>
          <Brand src="/architect/portfolio/images/contribute_process_01.png" alt="Submit process 1" width="200px"/>
                  Users share how they implemented multi-product solutions by following our design template, and submitting an issue in Gitlab.
        </div>
        <div>
            <h3>Review</h3>
            <Brand src="/architect/portfolio/images/contribute_process_02.png" alt="Submit process 2" width="200px"/>
                  A Red Hat Portfolio Architect will review your submission and determine where it fits within our portfolio.
                  </div><div>
            <h3>Feedback</h3>
                  <Brand src="/architect/portfolio/images/contribute_process_03.png" alt="Submit process 3" width="200px"/>
                  Once reviewed, the Architect will connect with feedback on what they’ve determined, and if necessary how to refactor to complete the architecture.
                  </div><div>
            <h3>Life Cycle</h3>
                  <Brand src="/architect/portfolio/images/contribute_process_04.png" alt="4" width="200px"/>
                  As the architecture is being developed, you will work with your Architect to standardize this solution.
                  </div><div>
            <h3>Publishing</h3>
                  <Brand src="/architect/portfolio/images/contribute_process_05.png" alt="Card Image" width="200px"/>
                  The Architecture is ready for marketing and publishing on Red Hat channels.
                  </div>
        </Carousel>
      </div>

            
        
        
        
  </React.Fragment>
}
}

export { SubmitCarousel };

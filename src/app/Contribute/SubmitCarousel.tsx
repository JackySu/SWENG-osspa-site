import * as React from 'react';
import { 
  Brand } from '@patternfly/react-core';

import { css } from '@patternfly/react-styles';
import '@app/react-asciidoc/fedora.css';
import '@app/react-asciidoc/carousel.css';
import { Carousel } from '@trendyol-js/react-carousel';

  
class SubmitCarousel extends React.Component {
  
  
  

  render() {

    
    return  <React.Fragment>
        
        
    
      <div class="submitCarousel">
        <Carousel show={3} slide={1} swiping={true} infinite={false}>
        <div>
          <div class="title_carousel">Submit Idea</div>
          <Brand src="/architect/portfolio/images/contribute_process_01.png" alt="Submit process 1" width="200px"/>
          <p>
              Users share how they implemented multi-product solutions by following our design template, and submitting an issue in Gitlab.
          </p>
        </div>
        <div>
            <div class="title_carousel">Review</div>
            <Brand src="/architect/portfolio/images/contribute_process_02.png" alt="Submit process 2" width="200px"/>
                <p>
                  A Red Hat Portfolio Architect will review your submission and determine where it fits within our portfolio.
                </p>      
            </div><div>
            <div class="title_carousel">Feedback</div>
                  <Brand src="/architect/portfolio/images/contribute_process_03.png" alt="Submit process 3" width="200px"/>
                <p>
                  Once reviewed, the Architect will connect with feedback on what they’ve determined, and if necessary how to refactor to complete the architecture.
                  </p>      
            </div><div>
            <div class="title_carousel">Life Cycle</div>
                  <Brand src="/architect/portfolio/images/contribute_process_04.png" alt="4" width="200px"/>
                <p>
                  As the architecture is being developed, you will work with your Architect to standardize this solution.
                  </p>      
            </div><div>
            <div class="title_carousel">Publishing</div>
                  <Brand src="/architect/portfolio/images/contribute_process_05.png" alt="Card Image" width="200px"/>
                <p>
                  The Architecture is ready for marketing and publishing on Red Hat channels.
                  </p>      
            </div>
        </Carousel>
      </div>

            
        
        
        
  </React.Fragment>
}
}

export { SubmitCarousel };

import * as React from 'react';
import { 
  JumpLinks, JumpLinksItem,
  Page, PageSection, PageSectionVariants,
  Flex,FlexItem,
  Gallery, GalleryItem,
  Card, CardTitle, CardBody, CardFooter, CardHeader,CardHeaderMain,Brand,
  SkipToContent, Sidebar, SidebarPanel, SidebarContent } from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

import { css } from '@patternfly/react-styles';
import '@app/react-asciidoc/fedora.css';
import {SubmitCarousel} from '@app/Contribute/SubmitCarousel';
import { Link } from 'react-router-dom';
  
class Contribute extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false,
      windowSize: 0
    };
    
  }
  
  

  render() {
    const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
      this.setState({ isMobileView: props.mobileView,windowSize: props.windowSize });
    };

    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;
    var sidebarPanel = <SidebarPanel variant="sticky">
    
    
      <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" width={250}>
                <Thead>
                <Tr>
                  <Th colSpan="2" >Jump to Sections</Th>
                </Tr>
                </Thead>
               
                <Tbody>
                    
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_buildingPA">What is Portfolio Architecture</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_paprocess">How are Portfolio Architectures Created</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_contribute">Contribute to Portfolio Architecture</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_other">Other Resources</a></Td>
                      </Tr>
                      
                </Tbody>
    
      </TableComposable>
      
    
    </SidebarPanel>

    var imagesize = (Math.round((this.state.windowSize-250)/7));
    var iframewidth = (Math.round((this.state.windowSize)/2.5));
    var iframeheight= Math.round((iframewidth)*0.7);
    if(this.state.isMobileView === true) {
      sidebarPanel=<div></div>
      imagesize=(this.state.windowSize)-300;
      iframewidth=(this.state.windowSize)-300;
      iframeheight= Math.round((iframewidth)/2);
    }

    
    return  <React.Fragment>
        
        <Page
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
          onPageResize={onPageResize}
          groupProps={{
            sticky: 'top'
          }}
          
          >
            
        
        
        <PageSection>
        
          <Sidebar hasGutter orientation={'split'} >
          {sidebarPanel}
          <SidebarContent hasNoBackground>
          <div class='container '>
            
            <div class="left">
              <table width="100%" height="381px" >
                <thead>
                  <tr>
                  <iframe class="learn_more_iframe" src="https://www.youtube.com/embed/HEemD0HpY9Q" frameborder="0"></iframe>
                  </tr>
                </thead>
              </table>
              
              </div>
              <div class="right"> The Open Source Software Portfolio Architecture community depends on contributions to help us grow and evolve. We encourage everyone, regardless of background, to make suggestions for enhancements, contribute new architectures and ideas and more. With your help, we can become the go to reference for all architects that wanted to build their system with Red Hat solutions.
              </div>
          
            
          </div>
             
              <h2>What is Portfolio Architecture</h2><a id="_buildingPA"></a>
              <Gallery  hasGutter className="learn_more_gallery">
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact isPlain >
                      <CardTitle className="contributecardtitle">Evidence based architectures reference</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-evidence.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">A portfolio architecture is built on facts found in successful customer implementations. It contains diagrams for logical, schematic, and details on each of the technical components.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="yy" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Combination of recommended practices and patterns</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-best-pattern.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Based on each scenario, a portfolio architecture provides recommendations, lessons learned, and best practices with using Red Hat products to architect the solution.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="zz" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Tools to help you create and architect your deployment</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-tools.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Build your own architecture diagrams, with standardized icons, for better team collaboration and communication</CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>
             
              <a id="_paprocess"><h2>How are Portfolio Architectures Created</h2></a>
                <Gallery  hasGutter className="learn_more_gallery_process">
                <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Review Submissions</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa_create_01.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Submissions come from the community, customers, and from Red Hatters who work with customers on their implementations.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Genericize Technology</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa_create_02.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">We take  specific deployment scenarios… and examining all products and parts of the PA leads us to build a generic solution that fits many customer and industry needs and allows for further customization with our industry leading awesome tool we built</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Outline Architecture</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa_create_03.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">With the generic solution gathered, we develop design best practices giving you a form-fit solution that can be easily optimized to fit the specific business objectives of your organization, with your choice of open source technology</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Complete Architecture</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa_create_04.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Published portfolio architecture on the website and this ensures consistency or product scope and usage in various deployment scenarios.</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
               


                <a id="_contribute"><h2>Contribute to Portfolio Architecture</h2></a>
                <p>
                    We welcome new contributions, whether for a complete set of diagrams or simply tell us more about how you built the system with multiple Red Hat products. Contribute to create a new Portfolio Architecture by simply share any implementation that you have done that contain at least three or more Red Hat products.
                    <br/>
                    <br/>
                    The preferred way of submitting your contribution is through creating an issue on the repository. You can find many resources online explaining how to work on Gitlab projects and how to submit work to these projects.
                </p>
                <br/>
                <p>
                 
                <Gallery  hasGutter className="learn_more_carousel">
                  <GalleryItem>
                    <SubmitCarousel/>
                  
                  </GalleryItem>
                </Gallery> 
                <br/>
                </p>

                <a id="_other"><h2>Other Resources</h2></a>
                

                <Gallery  hasGutter className="learn_more_gallery">
                <GalleryItem key="one">
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle"> Workshops </CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_other_01.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">
                      <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-template">Getting started</a>
                      <br/>
                      Architecture development process and templates
                      <br/>
                      <br/>
                      <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-workshops/#/"> Diagram Tooling</a>
                      <br/>
                      how to use, design, and create architectural diagrams based on the draw.io tooling and Red Hat Portfolio Architecture design elements.

                      </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Feature Request </CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand  src="/architect/portfolio/images/contribute_other_02.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Have suggestions or code contributions? Any feedback on how we can improve this website are all welcome.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Tooling enhancement</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_other_03.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Help us enhance our architectural diagram tool and PA Center</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
            
          </SidebarContent>
          </Sidebar>
          
        </PageSection>

        

        </Page>
  </React.Fragment>
}
}

export { Contribute };

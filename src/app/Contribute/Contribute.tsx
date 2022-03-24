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
import LearnMoreBanner from '@app/Contribute/LearnMoreBanner';
  
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
                        <Td><a href="/architect/portfolio/contribute#_paprocess">Portfolio Architecture Process</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_gettingstartedPA">Getting Started</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_contribute">Contribute</a></Td>
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
             
              <h2>What is Portfolio Architecture ?</h2><a id="_buildingPA"></a>
              <Gallery  hasGutter minWidths={{sm:'100px', md: '200px', lg: '250px', '2xl': '400px' }} className="learn_more_gallery">
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact isPlain >
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-evidence.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Evidence based architectures reference</CardTitle>
                      <CardBody className="contributecardbody">Based on facts found in actual successful implementations. It contains diagrams for logical, schematic, and details on each components.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="xx" isCompact isPlain>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-best-pattern.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Combination of best practices and patterns</CardTitle>
                      <CardBody className="contributecardbody">Based on each scenario, provides recommendations, lessons learnt and best practices that use Red Hat solutions to architect the system.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="yy" isCompact isPlain>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-tools.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Tools to architect</CardTitle>
                      <CardBody className="contributecardbody">Build your own architecture diagrams, with standardized icons, diagrams for better team collabrations and communications. <br/></CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>
             
              <a id="_paprocess"><h2>Portfolio Architecture Process</h2></a>
              <Gallery  hasGutter minWidths={{sm:'200px', md: '500px', lg: '750px', '2xl': '1200px' }} className="learn_more_gallery">
                <GalleryItem key="one">
                  <Card isRounded={true} isPlain>
                    <CardHeader className="contribute_card_header">
                      <CardHeaderMain>
                        <Brand src="/architect/portfolio/images/pa-process.png" alt="Card Image" width={(imagesize*6)+"px"}/>
                      </CardHeaderMain>
                    </CardHeader>
                  </Card>
                  </GalleryItem>
              </Gallery>
                <br/>
                <br/>
                <a id="_gettingstartedPA"></a>
                <Gallery  hasGutter minWidths={{sm:'100px', md: '200px', lg: '250px', '2xl': '400px' }} className="learn_more_gallery">
                <GalleryItem key="one">
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_workshop.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"> <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-template">Getting Started Workshop</a></CardTitle>
                      <CardBody className="contributecardbody">Architecture development process and templates</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_tools.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-workshops/#/">Diagram Tooling Workshop</a></CardTitle>
                      <CardBody className="contributecardbody">how to use, design, and create architectural diagrams based on the draw.io tooling and Red Hat Portfolio Architecture design elements.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_repo.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples">Browse Example Repository</a></CardTitle>
                      <CardBody className="contributecardbody">Examples of customer implementations using Red Hat product portfolio.</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
               
                <a id="_contribute"><h2>Contribute to Portfolio Architecture</h2></a>
                <p>
                  We are always very happy to have contributions, whether for a complete set of diagrams or simply tell us more about how you built the system with multiple Red Hat products. 
                  <br/>  
                <br/>
                </p>

              <Gallery  hasGutter minWidths={{sm:'300px', md: '600px', lg: '750px', '2xl': '1200px' }} className="learn_more_gallery">
                <GalleryItem key="one">
                  <Card isRounded={true} isPlain>
                    <CardBody>
                    Placeholder for process images
                    </CardBody>
                  </Card>
                  </GalleryItem>
                  </Gallery>
                
                <p>
                  The preferred way of submitting your contribution is through creating an issue on the repository.  You can find many resources online explaining how to work on Gitlab projects and how to submit work to these projects.
                  There are several projects you can help with: </p>
                <br/>


                <Gallery  hasGutter minWidths={{sm:'100px', md: '200px', lg: '250px', '2xl': '400px' }} className="learn_more_gallery">
                <GalleryItem key="one">
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"> <a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples/-/issues/new?issue">Portfolio Architecture</a></CardTitle>
                      <CardBody className="contributecardbody">Contribute to create a new Portfolio Architecture by simply share any implementation that you have done that contain at least three or more Red Hat products. </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand  src="/architect/portfolio/images/contribute_helptool.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-tooling"> Enhance Our Tool</a> </CardTitle>
                      <CardBody className="contributecardbody">Help us enhance our architectural diagram tool, We use draw.io as the base. </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_website.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/osspa/osspa-site">P.A. Center</a>  </CardTitle>
                      <CardBody className="contributecardbody">Any suggestion, code contribution on making this website better are all welcome.</CardBody>    
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

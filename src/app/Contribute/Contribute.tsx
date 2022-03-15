import * as React from 'react';
import { 
  JumpLinks, JumpLinksItem,
  Page, PageSection, PageSectionVariants,
  List, ListItem,
  Gallery, GalleryItem,
  Card, CardTitle, CardBody, CardFooter, CardHeader,CardHeaderMain,Brand,
  SkipToContent, Sidebar, SidebarPanel, SidebarContent } from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import { Footer } from '@app/AppLayout/Footer';
import { css } from '@patternfly/react-styles';
import '@app/react-asciidoc/fedora.css';
  
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

    var imagesize = (Math.round((this.state.windowSize-250)/3)-200);
    if(this.state.isMobileView === true) {
      sidebarPanel=<div></div>
      imagesize=this.state.windowSize-300;
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
        
   
          <Sidebar hasGutter orientation={'split'}>
          {sidebarPanel}
          <SidebarContent hasNoBackground>
          <PageSection>

            The Red Hat Portfolio Architecture center showcases successful customer deployments of our open source software, as well as architecture best practices and tools to meet your innovative datacenter and cloud based business objectives.
            Placeholder for video
          </PageSection>
              
                  
            <PageSection>
              <h2>What is Portfolio Architecture ?</h2>
              <Gallery  hasGutter minWidths={{sm:'100px', md: '200px', lg: '300px', '2xl': '600px' }}>
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contribute_card_image_1" src="/architect/portfolio/images/pa-overview-evidence.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Evidence based architectures reference</CardTitle>
                      <CardBody className="contributecardbody">Based on facts found in actual successful implementations. It contains diagrams for logical, schematic, and details on each components.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="xx" isCompact>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contribute_card_image_2" src="/architect/portfolio/images/pa-overview-best-pattern.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Combination of best practices and patterns</CardTitle>
                      <CardBody className="contributecardbody">Based on each scenario, provides recommendations, lessons learnt and best practices that use Red Hat solutions to architect the system.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="yy" isCompact>
                      <CardHeader >
                            <CardHeaderMain>
                              <Brand className="contribute_card_image_3" src="/architect/portfolio/images/pa-overview-tools.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Tools to architect</CardTitle>
                      <CardBody className="contributecardbody">Build your own architecture diagrams, with standardized icons, diagrams for better team collabrations and communications. <br/></CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>
              </PageSection>
              <PageSection>
              
              <h2>Portfolio Architecture Process</h2>
              
                  <Card isRounded={true} >
                    <CardBody>
                      <img src="/architect/portfolio/images/pa-process.png"/>
                    </CardBody>
                  </Card>
                <br/>
                <br/>
              <Gallery hasGutter minWidths={{sm:'100px',  md: '200px', lg: '300px', '2xl': '600px' }}>
                <GalleryItem key="one">
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_workshop.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"> <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-template">Getting Started Workshop</a></CardTitle>
                      <CardBody className="contributecardbody">Architecture development process and templates</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand  src="/architect/portfolio/images/contribute_tools.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-workshops/#/">Diagram Tooling Workshop</a></CardTitle>
                      <CardBody className="contributecardbody">how to use, design, and create architectural diagrams based on the draw.io tooling and Red Hat Portfolio Architecture design elements.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_repo.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples">Browse Example Repository</a></CardTitle>
                      <CardBody className="contributecardbody">Examples of customer implementations using Red Hat product portfolio.</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
                </PageSection>
                <PageSection>
              <h2>Contribute to Portfolio Architecture</h2>
              
              <p>
                We are always very happy to have contributions, whether for a complete set of diagrams or simply tell us more about how you built the system with multiple Red Hat products. 
                <br/>  
              <br/>
              </p>

        
              

              <Card isRounded={true} >
                    <CardBody>
                    Placeholder for process images
                    </CardBody>
                  </Card>
                <br/>
                
                <p>
                  The preferred way of submitting your contribution is through creating an issue on the repository.  You can find many resources online explaining how to work on Gitlab projects and how to submit work to these projects.
                  There are several projects you can help with: </p>
                <br/>


              <Gallery hasGutter minWidths={{sm:'100px', md: '200px', lg: '300px', '2xl': '600px' }}>
                <GalleryItem key="one">
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"> <a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples/-/issues/new?issue">Portfolio Architecture</a></CardTitle>
                      <CardBody className="contributecardbody">Contribute to create a new Portfolio Architecture by simply share any implementation that you have done that contain at least three or more Red Hat products. </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand  src="/architect/portfolio/images/contribute_helptool.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-tooling"> Enhance Our Tool</a> </CardTitle>
                      <CardBody className="contributecardbody">Help us enhance our architectural diagram tool, We use draw.io as the base. </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_website.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/osspa/osspa-site">P.A. Center</a>  </CardTitle>
                      <CardBody className="contributecardbody">Any suggestion, code contribution on making this website better are all welcome.</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>

              


              </PageSection>
            
            
          </SidebarContent>
          </Sidebar>
   
        </PageSection>
          <Footer/>
        

        </Page>
  </React.Fragment>
}
}

export { Contribute };

import * as React from 'react';
import { 
  
  Page, PageSection, PageSectionVariants,
  Grid,GridItem,
  Gallery, GalleryItem,
  Card, CardTitle, CardBody, CardFooter, CardHeader,CardHeaderMain,Brand,
  SkipToContent } from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';


import '@app/react-asciidoc/fedora.css';
  
class LearnMore extends React.Component {
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
    var sidebarPanel = 
    
    <GridItem span={3} rowSpan={12}>
              <PageSection className="tablepadding" id="catalog-controll">
      <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100 contribute_table">
                <Thead>
                <Tr>
                  <Th colSpan="2" >Jump to Sections</Th>
                </Tr>
                </Thead>
               
                <Tbody>
                      <Tr>
                        <Td><a href="/architect/portfolio/learnmore#_buildingPA">What is Portfolio Architecture</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/learnmore#_solutionPattern">What is Solution Pattern</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/learnmore#_validatedPattern">What is Validate Pattern</a></Td>
                      </Tr>
                </Tbody>
      </TableComposable>
      </PageSection>
    </GridItem>
    
    var top_intro = 
    <div class='container'>
        <div class="left">
          <table width="100%" height="281px" >
            <thead>
              <tr>
                <iframe class="learn_more_iframe" src="https://www.youtube.com/embed/87lISBZZc6w" frameborder="0"></iframe>
              </tr>
            </thead>
          </table>
        </div>
        <div class="right"> <b>Red Hat Architecture Center</b>
          <br/><br/>
          Provides examples, patterns, and use cases for designing and building with Red Hat Solutions.
          <br/><br/>
          It covers from actual customer implementation, opinionated design and validated formula, partner solution and innovative ideas from applications, data centers to private and public clouds. 
        </div>
  </div>

    var imagesize = (Math.round((this.state.windowSize-250)/7));
    var iframewidth = (Math.round((this.state.windowSize)/2.5));
    var iframeheight= Math.round((iframewidth)*0.7);
    var gridspan = 9;
    if(this.state.isMobileView === true) {
      sidebarPanel=<div></div>
      imagesize=(this.state.windowSize)-300;
      iframewidth=(this.state.windowSize)-300;
      iframeheight= Math.round((iframewidth)/2);
      gridspan =12

      top_intro = 
        <div>
          <div>
            <table width="100%" height="381px" >
              <thead>
                <tr>
                <iframe class="learn_more_iframe" src="https://www.youtube.com/embed/HEemD0HpY9Q" frameborder="0"></iframe>
                </tr>
              </thead>
            </table>
          </div>
          <div> Architecture Center --- XXX
            <br/><br/>
            With your help, we can become the go to reference for architects that want to build and innovate their systems with open-source Red Hat solutions.
            <br/><br/>
            Learn more about how and why we create these products with you to help solve real-world business challenges faced by customers and partners like you every day.
          </div>
        </div>
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
            
        
        
        <PageSection className='main_content_section_info'>
        
        <Grid >
          
                {sidebarPanel}
              
          <GridItem span={gridspan} rowSpan={11}>
          <PageSection>
              {top_intro}
             
              <a id="_buildingPA"></a><h2>What is Portfolio Architecture</h2>
              <Gallery  hasGutter className="learn_more_gallery">
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact isPlain >
                      <CardTitle className="contributecardtitle">Evidence based architecture reference</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/pa-overview-evidence.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Built on facts found in successful customer implementations and documented deployments. They contain logical, schematic, and detail diagrams on each of the technical components.</CardBody>    
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
                      <CardBody className="contributecardbody">Our architectures are based on deployment scenarios and business drivers, and provide recommendations, lessons learned, and best practices on how to use Red Hat products to architect solutions.</CardBody>    
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
                      <CardBody className="contributecardbody">Use our resources and tools to build your own architecture diagrams with standardized icons for better team collaboration and communication, and submit your ideas to a community of Red Hat experts who can provide feedback and guidance.</CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>
             
              <a id="_paprocess"></a><h2>How Portfolio Architectures are created</h2>
                <Gallery  hasGutter className="learn_more_gallery_process">
                <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Review Submissions</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_pa_create_01.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Submissions come from the community, partners and customers, and from Red Hatters who work with architects and engineers on their deployment implementations.</CardBody>    
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
                      <CardBody className="contributecardbody">We take specific deployment scenarios and examine all products and parts of the solution. This leads us to build a generic architecture that fits many customer and industry needs, and allows for further customization with our open-source software.</CardBody>    
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
                      <CardBody className="contributecardbody">With a generic solution gathered and researched, we then develop and design best practices to give you a solution that can be easily optimized to fit the specific business objectives of your organization, with your choice of technologies in the deployment.</CardBody>    
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
                      <CardBody className="contributecardbody">Published Portfolio Architectures on the website ensure consistency in product scope and usage in various deployment scenarios and provide expert guidance on successful implementations.</CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
               
              <a id="_solutionPattern"></a><h2>What is Solution Pattern</h2>
              <Gallery  hasGutter className="learn_more_gallery">
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact isPlain >
                      <CardTitle className="contributecardtitle">Opinionated practices</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisSP_01.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Opinionated practices on how to design, develop, integrate, automate and deliver cloud native applications. They target common use cases faced by organizations on a digital transformation through cloud adoption and app modernization.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="yy" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Reference implementation</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisSP_02.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Every solution pattern contains a fully working reference implementation which illustrates the use case. The reference implementation can be used to demo the solution pattern or as a basis for enablement activities.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="zz" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Fully documented</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisSP_03.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">The solution patterns are fully documented, and typically include background information on business contexts and use cases, detailed technical diagrams, demo walkthrough guides, provisioning instructions and automation scripts.</CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>

              <a id="_validatedPattern"></a><h2>What is Validated Pattern</h2>
               <Gallery  hasGutter className="learn_more_gallery">
                <GalleryItem key="one" >
                  <Card isHoverable={false} key="xx" isCompact isPlain >
                      <CardTitle className="contributecardtitle">Code you can run</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisVP_01.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Contain all the code needed to help build your edge stack so that you can go from zero to POC faster. All steps are fully automated through GitOps processes to automate deployments consistently and at scale..</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="yy" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Dynamic and updated</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisVP_02.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Continuously tested against current product releases so that your deployment is kept up to date—reducing risk while using the latest capabilities.</CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem >
                  <Card isHoverable={false} key="zz" isCompact isPlain>
                      <CardTitle className="contributecardtitle">Open and customizable</CardTitle>
                      <CardHeader  className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/whatisVP_03.png" alt="Card Image" width={imagesize+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">We build the foundational architecture that you can further customize to meet the needs of your use case. And community members can contribute their own improvements - making sure innovation never stops..</CardBody>    
                  </Card>
                </GalleryItem>
              </Gallery>
              <br/>
              <b>Community patterns</b> are deployment examples contributed from the community at large.  They represent use cases and because the pattern framework is gitops based, their modular aspect allows for pieces to be used in other community or validated patterns.
             
                
                  </PageSection>
                  </GridItem>
          </Grid>
        </PageSection>

        

        </Page>
  </React.Fragment>
}
}

export { LearnMore };

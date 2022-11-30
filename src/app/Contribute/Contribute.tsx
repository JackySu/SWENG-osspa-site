import * as React from 'react';
import { 
  JumpLinks, JumpLinksItem,
  Page, PageSection, PageSectionVariants,
  Grid,GridItem,
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
                        <Td><a href="/architect/portfolio/contribute#_buildingPA">What is Portfolio Architecture</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_paprocess">How Portfolio Architectures are created</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_contribute">Contribute to Portfolio Architecture</a></Td>
                      </Tr>
                      <Tr>
                        <Td><a href="/architect/portfolio/contribute#_other">Other Resources</a></Td>
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
        <div class="right"> The Open Source Software Portfolio Architecture community depends on contributions to help us grow and evolve. We encourage everyone, regardless of background, to make suggestions for enhancements, contribute new architectures and ideas, and more.
          <br/><br/>
          With your help, we can become the go to reference for architects that want to build and innovate their systems with open source Red Hat solutions.
          <br/><br/>
          Learn more about how and why we create these products with you to help solve real-world business challenges faced by customers and partners like you every day.
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
          <div> The Open Source Software Portfolio Architecture community depends on contributions to help us grow and evolve. We encourage everyone, regardless of background, to make suggestions for enhancements, contribute new architectures and ideas, and more.
            <br/><br/>
            With your help, we can become the go to reference for architects that want to build and innovate their systems with open source Red Hat solutions.
            <br/><br/>
            Learn more about how and why we create these products with you to help solve real-world business challenges faced by customers and partners like you every day.
          </div>
        </div>
    }

    //REPLACING HEADER
    document.getElementsByTagName("META")[3].content= "Contribute your implementation of Red Hat multi-product solutions. Open Source Software Portfolio Architecture Community provide new references for architects that want to build and innovate their systems with open source Red Hat solutions.";
    document.getElementsByTagName("META")[4].content= "open source, create architecture";

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
            
        
        
        <PageSection className='main_content_section'>
        
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
                      <CardBody className="contributecardbody">We take specific deployment scenarios and examine all products and parts of the solution. This leads us to build a generic architecture that fits many customer and industry needs, and allows for further customization with our open source software.</CardBody>    
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
               


                <a id="_contribute"></a><h2>Contribute to Portfolio Architecture</h2>
                <p>
                    We welcome new contributions, whether for a complete set of diagrams or simply to tell us more about how you architected a system with multiple Red Hat products. <a href="https://gitlab.com/osspa/portfolio-architecture-examples/-/issues/new?issuable_template=Contribute" target="_blank">Contribute</a> to create a new Portfolio Architecture by simply sharing any implementation that you have done that contains at least three or more Red Hat products.
                    <br/>
                    <br/>
                    The preferred way of <a href="https://gitlab.com/osspa/portfolio-architecture-examples/-/issues/new?issuable_template=Contribute" target="_blank">submitting your contribution</a> is through creating an issue in the GitLab repository. You can find many resources online explaining how to work on GitLab projects and how to submit work to these projects. You will need an account at GitLab to submit. Follow the Red Hat Portfolio Architecture lifecycle:
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

                <a id="_other"></a><h2>Other Resources</h2>
                

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
                      <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-template" target="_blank">Getting started</a>
                      <br/>
                      Architecture development process and templates
                      <br/>
                      <br/>
                      <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-workshops/#/" target="_blank"> Diagram Tooling</a>
                      <br/>
                      how to use, design, and create architectural diagrams based on diagrams.net tooling and Red Hat Portfolio Architecture design elements.

                      </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Architecture Improvements</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand  src="/architect/portfolio/images/contribute_other_02.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">If you have suggestions or documentation and code contributions to make for an <a href="https://gitlab.com/osspa/portfolio-architecture-examples" target="_blank">existing Portfolio Architecture</a>, please submit an issue against the architecture's associated .adoc. They're named as displayed in our catalogue. Feedback on how we can improve published Portfolio Architectures are welcome is welcome. </CardBody>    
                  </Card>
                  </GalleryItem>
                  <GalleryItem>
                  <Card isCompact isPlain>
                      <CardTitle className="contributecardtitle">Tooling and website enhancement</CardTitle>
                      <CardHeader className="contribute_card_header" >
                            <CardHeaderMain>
                              <Brand src="/architect/portfolio/images/contribute_other_03.png" alt="Card Image" width={(imagesize-30)+"px"}/>
                            </CardHeaderMain>
                      </CardHeader>
                      <CardBody className="contributecardbody">Help us enhance our <br/> <a href="https://gitlab.com/osspa/osspa-tool/-/issues/new" target="_blank">architectural diagram tool</a><br/> and <br/><a href="https://gitlab.com/osspa/osspa-site/-/issues/new?issuable_template=site_suggestions" target="_blank">open source software PA Center</a></CardBody>    
                  </Card>
                  </GalleryItem>
                  </Gallery>
                  </PageSection>
                  </GridItem>
          </Grid>
        </PageSection>

        

        </Page>
  </React.Fragment>
}
}

export { Contribute };

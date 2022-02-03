import * as React from 'react';
import { 
  JumpLinks, JumpLinksItem,
  Page, PageSection, PageSectionVariants,
  List, ListItem,
  Grid, GridItem,
  Card, CardTitle, CardBody, CardFooter, CardHeader,CardHeaderMain,Brand,
  ExpandableSection,
  Sidebar, SidebarPanel, SidebarContent } from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';
import { Footer } from '@app/AppLayout/Footer';
  const titlediv =   (
      <div class="pf-l-grid pf-m-all-10-col-on-sm pf-m-all-10-col-on-md pf-m-all-10-col-on-lg pf-m-all-10-col-on-xl pf-m-all-4-row-on-sm pf-m-all-4-row-on-md pf-m-all-4-row-on-lg pf-m-all-4-row-on-xl" 
        style={{backgroundImage:"url(/images/contributebackground.jpeg)", height:400, backgroundSize: "cover"}}>
        <div class="pf-l-grid__item pf-m-7-col-on-sm pf-m-7-col-on-lg pf-m-7-col-on-xl contribute_title_desc">
          <h1>Portfolio Architecture</h1> 
          <br/>
          <p> provide a common repeatable process, visual language and tool set, presentations, and architecture diagrams. These document real deployments of three or more products that continuously advance successful use cases.</p>
        </div>
        <div class="pf-l-grid__item pf-m-3-col-on-sm pf-m-3-col-on-lg pf-m-3-col-on-xl"></div>
      </div>
    );
  
class Contribute extends React.Component {
  constructor(props) {
    super(props);
    
    
  }
  
  

  render() {
    return  <React.Fragment>
        
        <Page
          isManagedSidebar
          
          mainContainerId='contribute'
          //additionalGroupedContent={headerContent}
          groupProps={{
            sticky: 'top'
          }}
        >
        
          
        
          
       
        <PageSection variant={PageSectionVariants.light}>
        
        <Grid>
          
          <Sidebar hasGutter orientation={'split'}>
          <SidebarPanel variant="sticky">
          <GridItem span={3} rowSpan={12}>
            <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" width={250}>
                      <Thead>
                      <Tr>
                        <Th></Th>
                      </Tr>
                      </Thead>
                      <ExpandableSection toggleText="Jump to Sections"  isExpanded={true} displaySize="large" isWidthLimited >
                      <Tbody>
                          
                            <Tr>
                              <Td><a href="/contribute#_buildingPA">What is Portfolio Architecture</a></Td>
                            </Tr>
                            <Tr>
                              <Td><a href="/contribute#_paprocess">Portfolio Architecture Process</a></Td>
                            </Tr>
                            <Tr>
                              <Td><a href="/contribute#_gettingstartedPA">Getting Started</a></Td>
                            </Tr>
                            <Tr>
                              <Td><a href="/contribute#_contribute">Contribute</a></Td>
                            </Tr>
                          
                        
                      </Tbody>
                      </ExpandableSection>
            </TableComposable>
          </GridItem>
          </SidebarPanel>
          <SidebarContent hasNoBackground>
            <GridItem span={9} rowSpan={1} id="_topbanner">
              {titlediv}
            </GridItem>
            <GridItem span={9} rowSpan={3} id="_buildingPA">
              <h2>What is Portfolio Architecture ?</h2>
              <Grid hasGutter >
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/pa-overview-evidence.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Evidence based architectures reference</CardTitle>
                      <CardFooter className="contributecardfooter">Based on facts found in actual successful implementations. It contains diagrams for logical, schematic, and details on each components.</CardFooter>    
                  </Card>
                </GridItem>
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/pa-overview-best-pattern.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Combination of best practices and patterns</CardTitle>
                      <CardFooter className="contributecardfooter">Based on each scenario, provides recommendations, lessons learnt and best practices that use Red Hat solutions to architect the system.</CardFooter>    
                  </Card>
                </GridItem>
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/pa-overview-tools.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle">Tools to architect</CardTitle>
                      <CardFooter className="contributecardfooter">Build your own architecture diagrams, with standardized icons, diagrams for better team collabrations and communications. <br/></CardFooter>    
                  </Card>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem span={9} rowSpan={1} id="_paprocess">
              <br/>
              <h2>Portfolio Architecture Process</h2>
              <Card isRounded={true} >
                <CardBody>
                  <img src="/images/pa-process.png"/>
                </CardBody>
              </Card>
              <br/>
            </GridItem>
            <GridItem span={9} rowSpan={3} id="_gettingstartedPA">
              <h2>Getting Started with Portfolio Architectures</h2>

              <Grid hasGutter >
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/contribute_workshop.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"> <a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-template">Getting Started Workshop</a></CardTitle>
                      <CardFooter className="contributecardfooter">Architecture development process and templates</CardFooter>    
                  </Card>
                </GridItem>
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/contribute_tools.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://redhatdemocentral.gitlab.io/portfolio-architecture-workshops/#/">Diagram Tooling Workshop</a></CardTitle>
                      <CardFooter className="contributecardfooter">how to use, design, and create architectural diagrams based on the draw.io tooling and Red Hat Portfolio Architecture design elements.</CardFooter>    
                  </Card>
                </GridItem>
                <GridItem span={4}>
                  <Card isCompact={true}>
                      <CardHeader>
                            <CardHeaderMain>
                              <Brand className="contributecardimage" src="/images/contribute_repo.png" alt="Card Image" />
                            </CardHeaderMain>
                      </CardHeader>
                      <CardTitle className="contributecardtitle"><a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples">Browse Example Repository</a></CardTitle>
                      <CardFooter className="contributecardfooter">Examples of customer implementations using Red Hat product portfolio.</CardFooter>    
                  </Card>
                </GridItem>
              </Grid>
            </GridItem>
            <GridItem span={9} rowSpan={1} id="_contribute">
              <br/>
              <h2>Contribute to Portfolio Architecture</h2>
              
              <p>We are always very happy to have contributions, whether for a complete set of diagrams or simply tell us more about how you built the system with multiple Red Hat products. <br/>
                  
                The preferred way of submitting your contribution is through creating an issue on the repository.  You can find many resources online explaining how to work on Gitlab projects and how to submit work to these projects.

              </p>

              <p> 
              There are several projects you can help with: 

              <List>
                <ListItem>Contribute to create a new <a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-examples">Portfolio Architecture</a>, it can be in many forms:
                  <List>
                    <ListItem>A completed Portfolio architecture with Logical, schematic and detail diagrams (see Getting Started section). And a documentation briefly explaining each diagram.</ListItem>
                    <ListItem>We know everyone is busy, you can always share any implementation that you have done. An architect from our team will reach out to help guide you through the next step(s). </ListItem>
                    <ListItem>All submissions need to contain at least three or more Red Hat products. </ListItem>
                  </List>
                </ListItem>
                <ListItem>Help us enhance the <a href="https://gitlab.com/redhatdemocentral/portfolio-architecture-tooling">Tool</a>. We use draw.io as the base tool.</ListItem>
                <ListItem>Making the <a href="https://gitlab.com/osspa/osspa-site">website</a> better. </ListItem>
              </List>


              </p>

                
              <br/>
            </GridItem>
            
          </SidebarContent>
          </Sidebar>
        </Grid>
        </PageSection>
          <Footer/>
        

        </Page>
  </React.Fragment>
}
}

export { Contribute };

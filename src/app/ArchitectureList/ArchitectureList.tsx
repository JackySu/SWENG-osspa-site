import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Page,
  PageSection,
  BackToTop,
  SkipToContent,
  SidebarContent,
  Sidebar,
  SidebarPanel,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';

import { ControlledCheckbox } from '@app/ArchitectureList/ControlledCheckbox';
import { PACatalog } from '@app/ArchitectureList/PACatalog';
import { Footer } from '@app/AppLayout/Footer';
import SelectedListProvider from './SelectedList';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";



class ArchitectureList extends React.Component {
 
  
  
 
  
  scrollTo(hash) {
    location.hash = "#" + hash;
  }

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      isMobileView: false
    };
    
  }

  render() {
    const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
      console.log("mobileView:==>"+props.mobileView);
      this.setState({ isMobileView: props.mobileView });
    
    };
    
    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    if(this.state.isMobileView === true) {
      return (
        <React.Fragment>
          <Page
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
          onPageResize={onPageResize}
          //additionalGroupedContent ={[headerContent,menuContent]}
          groupProps={{
            sticky: 'top'
          }}
        ></Page>
        <SelectedListProvider>
            <Grid >
            
                  <GridItem span={9} rowSpan={1}>
                  <PageSection width="100%" >
                    <table>
                      <tr>
                        <td width="100%" ><img src="/architect/portfolio/images/list_banner_half.png" alt="Banner Logo" width="100%" height="100%" id="_top"/></td>
                      </tr>
                      <tr>
                        <td width="100%" >The Red Hat Portfolio Architecture center showcases successful customer deployments of our open source software, as well as architecture best practices and tools to meet your innovative datacenter and cloud based business objectives.</td>
                      </tr>
                    </table>
                  </PageSection>
                  </GridItem>
                  <GridItem span={9} rowSpan={11}>
                    <PageSection>
                      <PACatalog />
                    </PageSection>
                  </GridItem>
              
            </Grid>
            
          </SelectedListProvider>
        </React.Fragment>
        
      );
    } else{
    return (
      <React.Fragment>
        
        <Page
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
          onPageResize={onPageResize}
          //additionalGroupedContent ={[headerContent,menuContent]}
          groupProps={{
            sticky: 'top'
          }}
        >
           
          <SelectedListProvider>
            <Grid >
            <Sidebar hasGutter orientation={'split'} >
              <SidebarPanel variant="static" >
              <GridItem span={3} rowSpan={12}>
                <PageSection className="tablepadding" id="catalog-controll">
                    <ControlledCheckbox /> 
                </PageSection>
              </GridItem>
              </SidebarPanel>
              <SidebarContent hasNoBackground>
                <GridItem span={9} rowSpan={1}>
                  <PageSection className="banner" >
                    <table>
                      <tr>
                        <td width="50%"><img src="/architect/portfolio/images/list_banner_half.png" alt="Banner Logo" width="100%" height="100%" id="_top"/></td>
                        <td width="50%">The Red Hat Portfolio Architecture center showcases successful customer deployments of our open source software, as well as architecture best practices and tools to meet your innovative datacenter and cloud based business objectives.</td>
                      </tr>
                    </table>
                  </PageSection>
                </GridItem>
                  <GridItem span={9} rowSpan={11}>
                    <PageSection>
                      <PACatalog />
                    </PageSection>
                  </GridItem>
              </SidebarContent>
             </Sidebar>
            </Grid>
            
          </SelectedListProvider>
          <BackToTop scrollableSelector='[name="main-content-page-layout-tertiary-nav"]' isAlwaysVisible={true} onClick={() => {this.scrollTo("_top"); location.reload();}} />
          <Footer/>
          
        </Page>
      </React.Fragment>
    );
    }
  }
}
export { ArchitectureList};

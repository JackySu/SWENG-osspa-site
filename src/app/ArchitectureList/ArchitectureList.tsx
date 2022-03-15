import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Banner,
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
import PABanner from '@app/ArchitectureList/PABanner';
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
        >
        
        <PABanner/>
        <SelectedListProvider>
            <Grid >
               
                  <GridItem span={9} rowSpan={11}>
                    <PageSection>
                      <PACatalog />
                    </PageSection>
                  </GridItem>
              
            </Grid>
            
          </SelectedListProvider>
          </Page>
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
          <PABanner/>
          
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

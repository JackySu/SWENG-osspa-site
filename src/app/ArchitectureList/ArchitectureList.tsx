import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Avatar,
  Button,
  ButtonVariant,
  
  Page,
  PageSection,
  PageSectionVariants,
  PageGroup,
  SkipToContent,
  SidebarContent,
  Sidebar,
  SidebarPanel,
  Grid,
  GridItem
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import BellIcon from '@patternfly/react-icons/dist/js/icons/bell-icon';
import CogIcon from '@patternfly/react-icons/dist/js/icons/cog-icon';
import HelpIcon from '@patternfly/react-icons/dist/js/icons/help-icon';
import ModuleIcon from '@patternfly/react-icons/dist/js/icons/module-icon';
import RHlogo from '@app/bgimages/Logo-RedHat.png';
import { ControlledCheckbox } from '@app/ArchitectureList/ControlledCheckbox';
import { PACatalog } from '@app/ArchitectureList/PACatalog';
import { Footer } from '@app/AppLayout/Footer';
import SelectedListProvider from './SelectedList';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";



class ArchitectureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0
    };
    
  }

  render() {
    
      
    
   
    
    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    return (
      <React.Fragment>
        
        <Page
          isManagedSidebar
          skipToContent={PageSkipToContent}
          mainContainerId={pageId}
          //additionalGroupedContent ={[headerContent,menuContent]}
          groupProps={{
            sticky: 'top'
          }}
        >
           
          <SelectedListProvider>
            <Grid >
            <Sidebar hasGutter orientation={'split'}>
            <SidebarPanel variant="sticky">
              <GridItem span={3} rowSpan={12}>
                <PageSection className="tablepadding">
                    <ControlledCheckbox /> 
                </PageSection>
              </GridItem>
              </SidebarPanel>
              <SidebarContent hasNoBackground>
              <GridItem span={9} rowSpan={1}>
                <PageSection className="banner" >
                <div style={{backgroundImage:"url(/images/list_banner.png)", height:300, backgroundSize: "cover"}}>
                  <Grid>
                    <GridItem span={5} rowSpan={12} className="contribute_banner_desc"><p></p></GridItem>
                    <GridItem span={7} rowSpan={12} className="contribute_banner_desc"><p><br/><br/><br/><br/>Need input from Will on brief intro on what is PA?</p></GridItem>
                  </Grid>
                </div>
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
          <Footer/>
          
        </Page>
      </React.Fragment>
    );
  }
}
export { ArchitectureList};

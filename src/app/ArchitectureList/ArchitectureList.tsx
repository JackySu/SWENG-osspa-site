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
  TextContent,
  Text,
  PageNavigation,
  Split,
  SplitItem
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
            <Split hasGutter>
              <SplitItem>
                <PageSection >
                    <ControlledCheckbox /> 
                </PageSection>
              </SplitItem>
              <SplitItem isFilled>
                <PageSection>
                  <PACatalog />
                </PageSection>

              </SplitItem>
            
            </Split>
          </SelectedListProvider>
          <Footer/>
          
        </Page>
      </React.Fragment>
    );
  }
}
export { ArchitectureList};

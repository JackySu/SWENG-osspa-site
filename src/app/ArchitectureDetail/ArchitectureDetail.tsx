import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Breadcrumb, 
  BreadcrumbItem,
  Menu,
  MenuList,
  MenuContent,
  MenuItem,
  Page,
  PageSection,
  PageGroup,
  PageSectionVariants,
  SkipToContent,
  Title,
  Split,
  SplitItem,
  Grid,
  GridItem
  
} from '@patternfly/react-core';
import { css } from '@patternfly/react-styles';
import CodeBranchIcon from '@patternfly/react-icons/dist/esm/icons/code-branch-icon';
import LayerGroupIcon from '@patternfly/react-icons/dist/esm/icons/layer-group-icon';
import CubeIcon from '@patternfly/react-icons/dist/esm/icons/cube-icon';
import { withRouter } from 'react-router-dom';
const qs = require('query-string');


import RHlogo from '@app/bgimages/Logo-RedHat.png';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";
import Asciidoc from 'react-asciidoc';
import '@app/react-asciidoc/fedora.css';

var title;


class ArchitectureDetail extends React.Component {

  
  

  constructor(props) {
    super(props);
    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      data: 'Loading....'
    };
    
  }

  

  componentDidMount() {
    const parsed = qs.parse(location.search);
    console.log("Access doc name -> "+parsed.docname);
    title = parsed.title;
    fetch("/osspa/osspa-content/-/raw/main/"+parsed.docname,{
      headers : { 
          method: "get",
          'Accept': 'text/asciidoc'
       }
      })
        .then(response => response.text())
        .then(data => this.setState({ data: data }));
        //.then(data => console.log("data->",data));
        //.then(data => this.setState({ totalReactPackages: data.total }));
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
          //additionalGroupedContent={headerContent}
          groupProps={{
            sticky: 'top'
          }}
        >
          
          <PageSection>
            <Breadcrumb> 
              <BreadcrumbItem to="#">Portfolio Architecture</BreadcrumbItem>
              <BreadcrumbItem to="#" isActive>{title}</BreadcrumbItem>
            </Breadcrumb>
          </PageSection>
          <PageSection>
          <Grid hasGutter>
              <GridItem span={2}>
                <PageSection>
                  <PageGroup>
                  <Menu >
                    <MenuContent>
                      <MenuList>
                        <MenuItem icon={<CodeBranchIcon aria-hidden />} itemId={0}>
                          From git
                        </MenuItem>
                        <MenuItem icon={<LayerGroupIcon aria-hidden />} itemId={1}>
                          Demo
                        </MenuItem>
                        <MenuItem icon={<CubeIcon aria-hidden />} itemId={2}>
                          Docker file
                        </MenuItem>
                      </MenuList>
                    </MenuContent>
                  </Menu>
                  </PageGroup>
                    
                </PageSection>
              </GridItem>
              <GridItem span={7}>
                  <Title headingLevel="h1">{title}</Title>
                <br/><br/>
                <Asciidoc>{this.state.data}</Asciidoc>
              </GridItem>
              <GridItem span={1}></GridItem>
          </Grid >
              
        
        
          </PageSection>
          <PageSection variant={PageSectionVariants.dark}>Footer</PageSection>
        </Page>
      </React.Fragment>
    );
  }
}
export { ArchitectureDetail};


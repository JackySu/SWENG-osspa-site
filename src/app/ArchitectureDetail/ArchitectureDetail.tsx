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
import  detailLinks  from './DetailLink.csv';
import Papa from 'papaparse';
import RHlogo from '@app/bgimages/Logo-RedHat.png';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";
import Asciidoc from 'react-asciidoc';
import '@app/react-asciidoc/fedora.css';
import { array } from 'prop-types';

var title;
var ppid;
var resourcelist;

class ArchitectureDetail extends React.Component {

  detailMap = new Map();
  
  loadMap = () => Papa.parse(detailLinks, {
      header: true,
      complete: (results) => {
        for(var i = 0; i != results.data.length; i++) {
          
          if(this.detailMap.has(results.data[i].pid)){
            newarray = this.detailMap.get(results.data[i].pid);
          }else{
            var newarray = [] as any;
            console.log("Create a new array");
          }

          newarray.push(results.data[i]);
          this.detailMap.set(results.data[i].pid,newarray);
        }
        
      }
  });

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
    this.loadMap();
    const parsed = qs.parse(location.search);
    console.log("Access doc name -> "+parsed.docname);
    title = parsed.title;
    ppid = parsed.ppid;
    
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

    resourcelist=this.detailMap.get(ppid);
    
    
    let tempdisplay = [] as any;
    if(Array.isArray(resourcelist) ){
      console.log(ppid+"-->tempdisplay--------->"+tempdisplay.map.length)
      tempdisplay=resourcelist;
      
    }

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
              <GridItem span={3}>
                <PageSection>
                  <PageGroup>
                  <Menu >
                    <MenuContent>
                      <MenuList>
                      {
                          tempdisplay.map( item =>
                          <MenuItem  itemId={item.ppid} description={item.description}>
                           Blog
                           <br/>
                           <img src="/redhatdemocentral/portfolio-architecture-examples/-/raw/main/images/intro-marketectures/hybrid-multicloud-management-gitops-marketing-slide.png"  width="100" height="50"></img>
                          </MenuItem>
                  )}
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


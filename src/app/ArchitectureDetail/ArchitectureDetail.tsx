import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Breadcrumb, 
  BreadcrumbItem,
  BackToTop,
  Page,
  PageSection,
  PageGroup,
  SkipToContent,
  Title,
  Grid,
  GridItem,
  SidebarContent,
  Sidebar,
  SidebarPanel
} from '@patternfly/react-core';
import { Footer } from '@app/AppLayout/Footer';
const qs = require('query-string');
import  detailLinks  from './DetailLink.csv';
import Papa from 'papaparse';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";
import { Asciidoc, } from '@app/ArchitectureDetail/AsciiDoc';
import ExternalLinkSquareAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-square-alt-icon';
import InfoCircleIcon from '@patternfly/react-icons/dist/esm/icons/info-circle-icon';
import EditIcon from '@patternfly/react-icons/dist/esm/icons/edit-icon';
import GithubIcon from '@patternfly/react-icons/dist/esm/icons/github-icon';
import GitLabIcon from '@patternfly/react-icons/dist/esm/icons/gitlab-icon';
import MonitoringIcon from '@patternfly/react-icons/dist/esm/icons/monitoring-icon';

import '@app/react-asciidoc/fedora.css';
import { array } from 'prop-types';
import { TableComposable, Thead, Tbody, Tr, Th, Td } from '@patternfly/react-table';

import palist from "../ArchitectureList/PAList.csv";
import productlist from "../ArchitectureList/ProductList.csv";

var title;
var ppid;
var docname;
var resourcelist;



class ArchitectureDetail extends React.Component {

  detailMap = new Map();
  productUsedArray = new Array();
  usedproductarray = Array();
  theProduct;
  
  loadPA = () => Papa.parse(palist, {
    header: true,
    complete: (productresults) => {
      for(var i = 0; i != productresults.data.length; i++) {
        if(productresults.data[i].ppid == ppid && productresults.data[i].islive == "TRUE"){
          docname = productresults.data[i].DetailPage;
          title = productresults.data[i].Heading;

          this.theProduct = productresults.data[i];
          this.productUsedArray=this.theProduct.Product.split(',');
          
          
        }
          
      }
      
    }
  });

  loadResources = () => Papa.parse(detailLinks, {
      header: true,
      complete: (results) => {
        var newarray = [] as any;
        for(var i = 0; i != results.data.length; i++) {
          
          if(this.detailMap.has(results.data[i].ppid)){
            newarray = this.detailMap.get(results.data[i].ppid);
          }else{
            newarray = [] as any;
          }
          newarray.push(results.data[i]);
          this.detailMap.set(results.data[i].ppid,newarray);
          
        }
        
      }
  });

  
  loadProductList = () => Papa.parse(productlist, {

    header: true,
    complete: (presults) => {
      
      for(var i = 0; i != presults.data.length; i++) {
        //
        for(var usedIndex = 0; usedIndex != this.productUsedArray.length; usedIndex++) {
           
            //console.log("result stringify:["+presults.data[i].pid == JSON.stringify(this.theProduct.Product[usedIndex])+"]" );
            var productid = this.productUsedArray[usedIndex].toString();
            if(presults.data[i].pid.valueOf() === productid){
              this.usedproductarray.push(presults.data[i]);
            }
          
        
        
        }
      }
      
    }

  });

  scrollTo(hash) {
    location.hash = "#" + hash;
  }
  
  constructor(props) {
    super(props);


    this.state = {
      isDropdownOpen: false,
      isKebabDropdownOpen: false,
      activeItem: 0,
      data: 'Loading....'
    };
    props.history.listen(location=>{
      this.setState(location)
    })
    
  }

  iconfinder(icontype){
    if(icontype=="Blog")
      return <EditIcon/>;
    else if(icontype=="Video")
      return <MonitoringIcon/>;
    else if(icontype=="Demo")
      return <GithubIcon/>;
    else if(icontype=="DemoGitlab")
      return <GitLabIcon/>;
    else 
      return <InfoCircleIcon/>;
  }
  

  async componentDidMount() {
    
    const parsed = qs.parse(location.search);
    ppid = parsed.ppid;
    this.loadPA();
    this.loadResources();
    this.loadProductList();

    if(""==docname || null==docname){
      alert("Portfolio Architecture Not Found!")
      window.location.replace("/architect/portfolio");
    }
    
    fetch("/architect/portfolio/osspa/osspa-content/-/raw/main/"+docname,{
      headers : { 
          method: "get",
          'Accept': 'text/asciidoc'
       }
      })
      .then((response) => {
        if(response.ok  )
          return response.text(); 
        else{
          alert("Detail Document unavalible!")
          window.location.replace("/architect/portfolio");
        }
      })
      
      .then(data => this.setState({ data: data }))
      .catch(error => {
        console.log("error---->"+error);
        return Promise.reject()
      })
      ;
        //.then(data => console.log("data->",data));
        //.then(data => this.setState({ totalReactPackages: data.total }));
    
    
  }

  render() {
      
    
    var currentLocation = window.location;
    
    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    resourcelist=this.detailMap.get(ppid);
    
    
    let tempdisplay = [] as any;
    let productdisplaylist = [] as any;
    if(Array.isArray(resourcelist) ){
      tempdisplay=resourcelist;
      
    }

    if(Array.isArray(this.usedproductarray) ){
      productdisplaylist=this.usedproductarray;
      
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
          
          

          <Grid >
              <Sidebar hasGutter orientation={'split'}>
              <SidebarPanel variant="static">
              <GridItem span={3} rowSpan={12}>
              <PageSection className="tablepadding">
                  <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" width={250}>
                      <Thead>
                      <Tr>
                        <Th colSpan="2" >Resources</Th>
                      </Tr>
                      </Thead>
                      
                      <Tbody>
                          { tempdisplay.map( item =>
                            <Tr>
                              <Td>
                                  {this.iconfinder(item.type)}
                              </Td>
                              <Td>
                              <a onClick={event => window.open(item.url)}>{item.description}<ExternalLinkSquareAltIcon/></a>
                              </Td>
                            </Tr>
                          )}
                        
                      </Tbody>
                      

                      <Thead>
                      <Tr>
                        <Th colSpan="2">Products</Th>
                      </Tr>
                      </Thead>
                     
                      <Tbody>
                        { productdisplaylist.map( item =>
                            <Tr>
                              <Td colSpan="2" >
                              <a onClick={event => window.open(item.plink)}>{item.pname}<ExternalLinkSquareAltIcon/></a>
                              </Td>
                            </Tr>
                          )}
                        
                      </Tbody>
                      
                  </TableComposable>
          
                </PageSection>
              </GridItem>
              </SidebarPanel>
              <SidebarContent hasNoBackground>
              <GridItem span={9} rowSpan={1}>
                <PageSection className="banner" >
                    <Breadcrumb> 
                      <BreadcrumbItem to="#">Portfolio Architecture</BreadcrumbItem>
                      <BreadcrumbItem to="#" isActive>{title}</BreadcrumbItem>
                    </Breadcrumb>
                    <br/>
                    <br/>
                    <Title headingLevel="h1" id="_title_top">{title}</Title>
                </PageSection>
              </GridItem>
                <GridItem span={9} rowSpan={11}>
                <PageSection>
                  
                
                  <Asciidoc>{this.state.data}</Asciidoc>
                </PageSection>
                </GridItem>
              </SidebarContent>
             </Sidebar>
            </Grid>
              
        
        
          
          <BackToTop scrollableSelector='[name="main-content-page-layout-tertiary-nav"]' isAlwaysVisible={true} onClick={() => this.scrollTo("_title_top")} />
          
          <Footer/>
        </Page>
      </React.Fragment>
    );
  }
}
export { ArchitectureDetail};


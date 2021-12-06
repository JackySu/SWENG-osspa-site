import * as React from 'react';
import { ExclamationTriangleIcon } from '@patternfly/react-icons';
import {
  Breadcrumb, 
  BreadcrumbItem,
  BackToTop,
  Page,
  PageSection,
  PageGroup,
  PageSectionVariants,
  SkipToContent,
  Title,
  Tile,
  Grid,
  GridItem
  
} from '@patternfly/react-core';
import { Footer } from '@app/AppLayout/Footer';
const qs = require('query-string');
import  detailLinks  from './DetailLink.csv';
import Papa from 'papaparse';
const imgBrand = "https://www.patternfly.org/v4/v4/images/pfLogo.ffdafb0c74aa4c9c011251aa8f0c144c.svg";
const imgAvatar = "https://www.patternfly.org/v4/v4/images/avatarImg.6daf7202106fbdb9c72360d30a6ea85d.svg";
import { Asciidoc } from '@app/ArchitectureDetail/AsciiDoc';
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
          }

          newarray.push(results.data[i]);
          this.detailMap.set(results.data[i].pid,newarray);
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
      
    
    var currentLocation = window.location;
    
    const pageId = 'main-content-page-layout-tertiary-nav';
    const PageSkipToContent = <SkipToContent href={`#${pageId}`}>Skip to content</SkipToContent>;

    resourcelist=this.detailMap.get(ppid);
    
    
    let tempdisplay = [] as any;
    if(Array.isArray(resourcelist) ){
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
          
          
          
          <Grid hasGutter>
              <GridItem span={3}>
                <PageSection className="tablepadding" >
                  <PageGroup>
                  { tempdisplay.map( item =>
                    
                    <Tile title={item.description} isDisplayLarge={false} onClick={event => window.open(item.url)}>
                     <img src={item.image_link} />
                     <br/>
                     {item.type}
                   </Tile> 
                  )}
                  </PageGroup>
                    
                </PageSection>
              </GridItem>
              <GridItem span={7}>
                <PageSection>
                  <Breadcrumb> 
                    <BreadcrumbItem to="#">Portfolio Architecture</BreadcrumbItem>
                    <BreadcrumbItem to="#" isActive>{title}</BreadcrumbItem>
                  </Breadcrumb>
                  <br/>
                  <br/>
                    <Title headingLevel="h1" id="_title_top">{title}</Title>
                
                  <Asciidoc>{this.state.data}</Asciidoc>
                </PageSection>
              </GridItem>
              
          </Grid >
              
        
        
          
          <BackToTop scrollableSelector='[name="main-content-page-layout-tertiary-nav"]' isAlwaysVisible={true} onClick={() => this.scrollTo("_title_top")} />
          
          <Footer/>
        </Page>
      </React.Fragment>
    );
  }
}
export { ArchitectureDetail};


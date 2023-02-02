import React from "react";

import {
  Banner,
  Masthead,
  MastheadMain,
  MastheadBrand,
  MastheadContent,
  Button,
  Panel,
  PanelMain,
  PanelMainBody,
  PanelFooter,
  Page,
  Tile
} from '@patternfly/react-core';
import ArrowRightIcon from '@patternfly/react-icons/dist/esm/icons/arrow-right-icon';
import { Carousel } from '@trendyol-js/react-carousel';


class PABanner extends React.Component{
   displayList;
   loadAnnouncementList = async () => {
    const response = await fetch(`http://localhost:5297/AnnouncementList`)
    this.displayList = await response.json()
    return true;  // this return value is necessary though not used, please don't remove it
  }


  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false
    };
   
}

async componentDidMount() {
  
}


render(){
  
    
    if (this.displayList == undefined) {
      this.loadAnnouncementList();
    }
    /*
    if(!Array.isArray(this.displayList) ){
      this.displayList = [] as any;
      alert('cant load file');
      
    }
    */

  const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
    this.setState({ isMobileView: props.mobileView});
  
  };
  var learnMoreButton=<span class="banner_link_learn_more">
      <Button variant="link">
      <img width="200" height="25" src="/architect/portfolio/images/contribute_schematic1.png" alt="Learn More"></img>
      <br/><a href="/architect/portfolio/contribute">Learn More <ArrowRightIcon /></a>
      </Button>
      </span>;
      if(this.state.isMobileView === true) {
        learnMoreButton=<div></div>
        
      }
  
      var bannerArticle = <div></div>  // still loading, so don't display anything but an empty div
      if (this.displayList != undefined) {
      bannerArticle = <Carousel show={1} slide={1} swiping={true} infinite={true}>
       
        {this.displayList.map( item => 
          <div class="admonitionblock announcement">
            <table class="banner" >
            <tbody><tr>
            <td class="icon">
              <div class="title">{item.announcementType}</div>
            </td>
            <td class="content">
            <a href={item.titleLink}><i class="pf-icon pf-icon-attention-bell"/>&nbsp;&nbsp; <b>{item.title}</b></a>  &nbsp; &nbsp; <i>{item.date}</i>  &nbsp; &nbsp;  {item.desc}
            </td>
            </tr>
            </tbody></table>
          </div>           
        )}
        
        </Carousel>
      }

    return(
      <React.Fragment>
        <Page
          onPageResize={onPageResize}
          className="banner_page"
        >

         
      <Masthead id="light-masthead" backgroundColor="light">
      <MastheadMain>
        <MastheadBrand><img src="/architect/portfolio/images/site-logo.png" width={"230px"}/></MastheadBrand>
      </MastheadMain>
      <MastheadContent>
       
      <Panel>
        <PanelMain>
          <PanelMainBody className="_banner">{" "}The Red Hat Portfolio Architecture Center showcases successful customer deployments of our open source software, as well as provides architecture best practices, tools, and links to other associated resources to meet your innovative datacenter and cloud based business objectives.
        </PanelMainBody>
        </PanelMain>
      </Panel>
        {learnMoreButton}
      </MastheadContent>
    </Masthead>
    <Masthead id="light-masthead-carousel" backgroundColor="light" >
      <MastheadContent>
        {bannerArticle}
       </MastheadContent>
       </Masthead>
    
    </Page>
    </React.Fragment>
    );
}

}

export default PABanner;


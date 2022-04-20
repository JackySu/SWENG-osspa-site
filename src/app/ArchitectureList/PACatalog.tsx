import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";

import React from 'react';
import {
  Brand, 
  Card, 
  CardBody, 
  CardFooter, 
  CardHeader, 
  CardHeaderMain, 
  CardTitle, 
  LabelGroup,
  Gallery,
  GalleryItem,
  Page,
  Label
} from '@patternfly/react-core';
import { Link } from "react-router-dom";
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import Papa from 'papaparse';
import { SelectedList } from './SelectedList';

const CARD_IMG_URL = "https://gitlab.com/osspa/portfolio-architecture-examples/-/raw/main/images/"
const isExpanded = false;
const DETAIL_URL = '/architecturedetail'

class PACatalog extends React.Component {
  static contextType = SelectedList;
  
  constructor(props) {
    super(props);
    this.state = {
      isMobileView: false,
      windowSize: 0
    };
  }
  

  render() {
    
    const {currentlist, selectedProduct, selectedSolution,selectedVertical} = this.context;
    const onPageResize = (props: { mobileView: boolean; windowSize: number }) => {
      console.log("windowSize-->"+props.windowSize);
      this.setState({ isMobileView: props.mobileView, windowSize: props.windowSize });
    
    };
    

    var tempdisplay;
    //var cardPAImagesize =this.state.windowSize/4;
    if(Array.isArray(currentlist) ){
      tempdisplay=currentlist;
      console.log("size---->"+tempdisplay.length)
    }
    if(this.state.isMobileView === true) {
      //cardPAImagesize=(this.state.windowSize-30)+"px";
      
    }

    var return_content = 
    <Page onPageResize={onPageResize}>
     <Gallery hasGutter className='catalog_gallery'>
            {
              tempdisplay.map( item =>
              <GalleryItem key={item.ppid}>
               <Card isHoverable={false} key={item.ppid} isCompact  >
                  <CardHeader>
                    <CardHeaderMain>
                    <Link to={DETAIL_URL+'?ppid='+item.ppid} ><Brand src={CARD_IMG_URL+item.Image1Url} alt="Card Image" className='catalog_card_img'/></Link>
                    </CardHeaderMain>
                  </CardHeader>
                  <Link to={DETAIL_URL+'?ppid='+item.ppid} ><CardTitle>{item.Heading}</CardTitle></Link>
                  <CardBody>{item.Summary}</CardBody>
                  <CardFooter>
                    <LabelGroup numLabels={5}>
                          {
                            item.Solutions.split(",").map (solutiontag =>
                            <Label color="cyan" key={item.ppid+solutiontag}>{solutiontag}</Label> 
                          )}
                          {
                            item.Vertical.split(",").map (verticaltag =>
                            <Label color="green" key={item.ppid+verticaltag} >{verticaltag}</Label> 
                          )}
                          {
                            item.Product.split(",").map (producttag =>
                            <Label color="red" key={item.ppid+producttag}>{producttag}</Label> 
                          )}
                          </LabelGroup>
                    </CardFooter>
                </Card>
              </GalleryItem>
            )}
             <GalleryItem key="nothing1" className='blank_card'>
                <br/> &nbsp; &nbsp; <br/> 
            </GalleryItem>
      </Gallery>
      </Page>


  if(tempdisplay.length==0)
    return_content =
      <Page onPageResize={onPageResize}>
        <br/> <h2>Sorry, no results found - try a different search</h2> <br/> 
      <Gallery hasGutter className='catalog_gallery'>
        <GalleryItem key="nothing1" className='blank_card'>
          <br/> &nbsp; &nbsp; <br/> 
        </GalleryItem>
        <GalleryItem key="nothing2" className='blank_card'>
          <br/> &nbsp; &nbsp; <br/> 
          
        </GalleryItem>
        <GalleryItem key="nothing3" className='blank_card'>
          <br/> &nbsp; &nbsp; <br/> 
          &nbsp; &nbsp; 
        </GalleryItem>
        <GalleryItem key="nothing4" className='blank_card'>
          <br/> &nbsp; &nbsp; <br/> 
          &nbsp; &nbsp; 
        </GalleryItem>
      </Gallery>
      </Page>
    
    return (
      <React.Fragment>
      {return_content}
      </React.Fragment>
    );
  }
}

export { PACatalog };

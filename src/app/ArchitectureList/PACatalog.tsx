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
  PageGroup,
  Label
} from '@patternfly/react-core';
import { Link } from "react-router-dom";
import InfoCircleIcon from '@patternfly/react-icons/dist/js/icons/info-circle-icon';
import Papa from 'papaparse';
import { SelectedList } from './SelectedList';

const CARD_IMG_URL = "https://gitlab.com/osspa/osspa-content/-/raw/main/images/"
const isExpanded = false;
const DETAIL_URL = '/architecturedetail'

class PACatalog extends React.Component {
  static contextType = SelectedList;
  
  constructor(props) {
    super(props);
  }
  

  render() {
    
    const {currentlist, selectedProduct, selectedSolution,selectedVertical} = this.context;
    
    var tempdisplay;
    if(Array.isArray(currentlist) )
      tempdisplay=currentlist;
    
    return (
      <React.Fragment>
         <Gallery hasGutter>
                {
                  tempdisplay.map( item =>
                  <GalleryItem key={item.ppid}>
                    <Link to={DETAIL_URL+'?ppid='+item.ppid} ><Card isHoverable key={item.ppid} isCompact={true} >
                      <CardHeader>
                        <CardHeaderMain>
                        <Brand src={CARD_IMG_URL+item.Image1Url} alt="Card Image" style={{ width: '500px', border: '1px solid #555' }} />
                        </CardHeaderMain>
                      </CardHeader>
                      <CardTitle>{item.Heading}</CardTitle>
                      <CardBody>{item.Summary}</CardBody>
                      <CardFooter>
                        <LabelGroup numLabels={20}>
                              {
                                item.Product.split(",").map (producttag =>
                                <Label color="red" key={item.ppid+producttag}>{producttag}</Label> 
                              )}
                              {
                                item.Solutions.split(",").map (solutiontag =>
                                <Label color="cyan" key={item.ppid+solutiontag}>{solutiontag}</Label> 
                              )}
                              {
                                item.Vertical.split(",").map (verticaltag =>
                                <Label color="green" key={item.ppid+verticaltag} >{verticaltag}</Label> 
                              )}
                              </LabelGroup>
                        </CardFooter>
                    </Card></Link>
                  </GalleryItem>
                )}
          </Gallery>
      </React.Fragment>
    );
  }
}

export { PACatalog };

import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";


import React from 'react';
import { Checkbox, SearchInput, Radio} from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td} from '@patternfly/react-table'; 

import Papa from 'papaparse';

var selectedProduct=[] as any;
var selectedSolution=[] as any;
var selectedVertical=[] as any;
var selectedProductType=[] as any;
var searchPhrase='';
var isExpanded  = true;

import { SelectedList } from './SelectedList';
import { ThumbsDownIcon } from '@patternfly/react-icons';
import { ids } from 'webpack';

class ControlledCheckbox extends React.Component {
  static contextType = SelectedList;
  constructor(props) {
    super(props);
  };

  
  
  handleSolutionChange = (value, id) => {
    //console.log(id,":",value);
    this.setState({ [id]: value });
    if(!selectedSolution.includes(id)){
      selectedSolution.push(id);
    }else{
      const rindex = selectedSolution.indexOf(id);
      selectedSolution.splice(rindex,1);
    }
  }

  handleProductChange = (value, id) => {
    //console.log(id,":",value);
    this.setState({ [id]: value });
    if(!selectedProduct.includes(id)){
      selectedProduct.push(id);
    }else{
      const rindex = selectedProduct.indexOf(id);
      selectedProduct.splice(rindex,1);
    }
  }

  handleVerticalChange = (value, id) => {
    
    this.setState({ [id]: value });
    if(!selectedVertical.includes(id)){
      selectedVertical.push(id);
    }else{
      const rindex = selectedVertical.indexOf(id);
      selectedVertical.splice(rindex,1);
    }
  }

  handleProductTypeChange = (value, id) => {
    //Reset ProductType everytime
    console.log(id,":",value);
    this.setState({ [id]: value });
    selectedProductType=[id];
    console.log("selectedProductType:",selectedProductType);
    
  }



  checkIfSelected = (checkboxtype, checkboxid) => {
    if(checkboxtype=="solution" && selectedSolution.includes(checkboxid)){
      return true;
    }else if(checkboxtype=="product" && selectedProduct.includes(checkboxid)){
      return true;
    }else if(checkboxtype=="vertical" && selectedVertical.includes(checkboxid)){
      return true;
    }else if(checkboxtype=="producttype" && selectedProductType.includes(checkboxid)){
      return true;
    }
    return false;
  };


  productArray;
  loadProductArray = async () => {
    const response = await fetch(`http://localhost:5297/ProductList`)
    this.productArray = await response.json()
    return true;  // this return value is necessary though not used, please don't remove it
  }

  solutionArray;
  loadSolutionArray = async () => {
    const response = await fetch(`http://localhost:5297/SolutionList`)
    this.solutionArray = await response.json()
    return true;
  }

  verticalArray;
  loadVerticalArray = async () => {
    const response = await fetch(`http://localhost:5297/VerticalList`)
    this.verticalArray = await response.json()
    return true;
  }

  typeArray;
  loadTypeArray = async () => {
    const response = await fetch(`http://localhost:5297/TypeList`)
    this.typeArray = await response.json()
    return true;
  }


  startload = () => {
    //console.log(listfile);
    this.loadProductArray();
    this.loadSolutionArray();
    this.loadVerticalArray();
    this.loadTypeArray();
  };

  
  emptysearch = () => {
    //console.log(id,":",value);
    this.setState({ searchPhrase: '' });
    searchPhrase='';
  }
  
  render() {
    
    if (this.productArray == undefined || this.solutionArray == undefined || this.verticalArray == undefined || this.typeArray == undefined) {
      this.startload();
    }

    const {updateProduct, updateSolution,updateVertical, updateProductType, searchAll} =  this.context;
    return (
      <React.Fragment>
        <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100">
          <Thead>
            <Tr>
              <Th colSpan="2">Search</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
              <SearchInput
                  placeholder="Search"
                  value={searchPhrase}
                  onChange={changeContent=>searchPhrase=changeContent}
                  onSearch={()=>searchAll(searchPhrase)}
                  onClear={()=>(this.emptysearch(),searchAll(''))}
                />
              </Td>
            </Tr>
          </Tbody>
        </TableComposable>
        <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100">
          <Thead>
          <Tr>
            <Th colSpan="2">Solution</Th>
          </Tr>
          </Thead>
          
            <Tbody>
              <Tr>
                <Td>
                  { this.solutionArray != undefined ? this.solutionArray.map( item =>
                    <Checkbox label={item.sname} aria-label={item.sname} id={item.sid} name={item.sid} key={item.sid} onChange={ e=> {this.handleSolutionChange(e, item.sid) ; updateSolution(item.sid);}} isChecked={this.checkIfSelected("solution",item.sid)}/>
                  ) : <div></div>}
                </Td>
              </Tr>
            </Tbody>
          </TableComposable>
          
          <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" >
          <Thead>
          <Tr>
            <Th colSpan="2">Vertical</Th>
          </Tr>
          </Thead>
              <Tbody>
              <Tr>
                <Td>
                  { this.verticalArray != undefined ? this.verticalArray.map( item =>
                    <Checkbox label={item.vname} aria-label={item.vname}  id={item.vid} name={item.vid} key={item.vid} onChange={ e=> {this.handleVerticalChange(e, item.vid) ; updateVertical(item.vid);}} isChecked={this.checkIfSelected("vertical",item.vid)}/>
                  ) : <div></div>}
                </Td>
              </Tr>
              </Tbody>
        </TableComposable>

        <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" >
          <Thead>
          <Tr>
            <th colSpan="2" >Products</th>
          </Tr>
          </Thead>
            <Tbody>
            <Tr>
              <Td>
                { this.productArray != undefined ? this.productArray.map( item =>
                  <Checkbox label={item.pname} aria-label={item.pname}  id={item.pid} name={item.pid} key={item.pid} onChange={ e=> {this.handleProductChange(e, item.pid) ; updateProduct(item.pid);}} isChecked={this.checkIfSelected("product",item.pid)}/>
                ) : <div></div>}
              </Td>
            </Tr>
            </Tbody>
          </TableComposable>

          <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100" >
          <Thead>
          <Tr>
            <th colSpan="2" >Architecture Type</th>
          </Tr>
          </Thead>
            <Tbody>
            <Tr>
              <Td>
                { this.typeArray != undefined ? this.typeArray.map( item =>
                  <Radio label={item.typename} aria-label={item.typename}  id={item.tid} name='productType' key={item.tid} onChange={ e=> {this.handleProductTypeChange(e, item.tid) ; updateProductType(item.tid);}} isChecked={this.checkIfSelected("producttype",item.tid)}/>
                ) : <div></div>}
                  <Radio label='All types' aria-label='allType'  id='type00' name='productType' key='ALL' onChange={ e=> {this.handleProductTypeChange(e, 'ALL') ; updateProductType('ALL');}} isChecked={this.checkIfSelected("producttype",'ALL')}/>
              </Td>
            </Tr>
            </Tbody>
          </TableComposable>
    </React.Fragment>
    );
  }
}

export { ControlledCheckbox, selectedProduct,selectedSolution,selectedVertical,searchPhrase };
import ReactDOM from 'react-dom';
import "@patternfly/react-core/dist/styles/base.css";


import React from 'react';
import { Checkbox, Nav, NavList, NavExpandable, NavItem } from '@patternfly/react-core';
import { TableComposable, Thead, Tbody, Tr, Th, Td} from '@patternfly/react-table'; 

import Papa from 'papaparse';
import productlist from "./ProductList.csv";
import solutionlist from "./SolutionList.csv";
import verticallist from "./VerticalList.csv";

var selectedProduct=[] as any;
var selectedSolution=[] as any;
var selectedVertical=[] as any;
var isExpanded  = true;

import { SelectedList } from './SelectedList';

class ControlledCheckbox extends React.Component {
  static contextType = SelectedList;
  constructor(props) {
    super(props);
    
  };

  
  
  handleSolutionChange = (value, id) => {
    console.log(id,":",value);
    this.setState({ [id]: value });
    if(!selectedSolution.includes(id)){
      selectedSolution.push(id);
    }else{
      const rindex = selectedSolution.indexOf(id);
      selectedSolution.splice(rindex,1);
    }
  }

  handleProductChange = (value, id) => {
    console.log(id,":",value);
    this.setState({ [id]: value });
    if(!selectedProduct.includes(id)){
      selectedProduct.push(id);
    }else{
      const rindex = selectedProduct.indexOf(id);
      selectedProduct.splice(rindex,1);
    }
  }

  handleVerticalChange = (value, id) => {
    console.log(id,":",value);
    this.setState({ [id]: value });
    if(!selectedVertical.includes(id)){
      selectedVertical.push(id);
    }else{
      const rindex = selectedVertical.indexOf(id);
      selectedVertical.splice(rindex,1);
    }
  }

  checkIfSelected = (checkboxtype, checkboxid) => {
    if(checkboxtype=="solution" && selectedSolution.includes(checkboxid)){
      return true;
    }else if(checkboxtype=="product" && selectedProduct.includes(checkboxid)){
      return true;
    }else if(checkboxtype=="vertical" && selectedVertical.includes(checkboxid)){
      return true;
    }
    return false;
  };

  productArray;
  solutionArray;
  verticalArray;

  startload = () => {
    //console.log(listfile);
    Papa.parse(productlist, {
      header: true,
      complete: (results) => {
        this.productArray=results.data;
      }
    })
    Papa.parse(solutionlist, {
      header: true,
      complete: (results) => {
        this.solutionArray=results.data;
      }
    })
    Papa.parse(verticallist, {
      header: true,
      complete: (results) => {
        this.verticalArray=results.data;
      }
    })
  };

  render() {
    
    this.startload();
    const {updateProduct, updateSolution,updateVertical} =  this.context;
    return (
      <React.Fragment>
        <TableComposable variant={'compact'} borders={false} className="pf-c-table pf-m-width-100">
          <Thead>
          <Tr>
            <Th colSpan="2">Solution</Th>
          </Tr>
          </Thead>
          
            <Tbody>
              <Tr>
                <Td>
                  {this.solutionArray.map( item =>
                    <Checkbox label={item.sname} aria-label={item.sname} id={item.sid} name={item.sid} key={item.sid} onChange={ e=> {this.handleSolutionChange(e, item.sid) ; updateSolution(item.sid);}} isChecked={this.checkIfSelected("solution",item.sid)}/>
                  )}
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
                  {this.verticalArray.map( item =>
                    <Checkbox label={item.vname} aria-label={item.vname}  id={item.vid} name={item.vid} key={item.vid} onChange={ e=> {this.handleVerticalChange(e, item.vid) ; updateVertical(item.vid);}} isChecked={this.checkIfSelected("vertical",item.vid)}/>
                  )}
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
                {this.productArray.map( item =>
                  <Checkbox label={item.pname} aria-label={item.pname}  id={item.pid} name={item.pid} key={item.pid} onChange={ e=> {this.handleProductChange(e, item.pid) ; updateProduct(item.pid);}} isChecked={this.checkIfSelected("product",item.pid)}/>
                )}
              </Td>
            </Tr>
            </Tbody>
          </TableComposable>
    </React.Fragment>
    );
  }
}

export { ControlledCheckbox, selectedProduct,selectedSolution,selectedVertical };
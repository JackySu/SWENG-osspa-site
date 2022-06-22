import React from "react";
import listfile from "./PAList.csv";
import Papa from 'papaparse';
export const SelectedList = React.createContext();

class SelectedListProvider extends React.Component{
    
          
    loadlist = () => Papa.parse(listfile, {
        header: true,
        complete: (results) => {
          return results.data;
        }
    });

    loadLive = () =>{
        var livelist=[] as any;
        this.loadlist().data.forEach(element => {
            if(element.islive=="TRUE"){
                livelist.push(element);
            }
          })
        return livelist;
    }
    
    state = {
        currentlist:this.loadLive(),
        selectedProduct: [] as any,
        selectedSolution: [] as any,
        selectedVertical: [] as any,
        selectedProductType: [] as any
    }
    updateList = () => {
        var templist = [] as any;
        
        //this.setState({currentlist:{currentlist:newlist}});

        this.loadLive().forEach(element => {
            var shouldPush = true;
            if(this.state.selectedProduct.length > 0){
                console.log("element",element.Product);
                this.state.selectedProduct.forEach(productItem => {
                    if(!element.Product.includes(productItem)){
                        shouldPush = false;
                    }    
                });
                
            }

            if(this.state.selectedSolution.length > 0){
                console.log("element",element.Solutions);
                this.state.selectedSolution.forEach(solutionItem => {
                    if(!element.Solutions.includes(solutionItem)){
                        shouldPush = false;
                    }    
                });
               
            }

            if(this.state.selectedVertical.length > 0){
                console.log("element",element.Vertical);
                this.state.selectedVertical.forEach(verticalItem => {
                    if(!element.Vertical.includes(verticalItem)){
                        shouldPush = false;
                    }    
                });
                
            }

            if(this.state.selectedProductType.length > 0){
                console.log("element",element.ProductType);
                this.state.selectedProductType.forEach(productTypeItem => {
                    if(!element.ProductType.includes(productTypeItem)){
                        shouldPush = false;
                    }    
                });
                
            }

            if(shouldPush)
                templist.push(element);

        });
        this.setState({currentlist:templist});
    }

    
    updateProduct = (pid) => {
        if(!this.state.selectedProduct.includes(pid)){
            this.state.selectedProduct.push(pid);
          }else{
            const rindex = this.state.selectedProduct.indexOf(pid);
            this.state.selectedProduct.splice(rindex,1);
          }
        this.setState({selectedProduct:this.state.selectedProduct});
        this.updateList();
    }
    updateSolution = (sid) => {
        if(!this.state.selectedSolution.includes(sid)){
            this.state.selectedSolution.push(sid);
          }else{
            const rindex = this.state.selectedSolution.indexOf(sid);
            this.state.selectedSolution.splice(rindex,1);
          }
        this.setState({selectedSolution:this.state.selectedSolution});
        this.updateList();
    }
    updateVertical = (vid) => {
        if(!this.state.selectedVertical.includes(vid)){
            this.state.selectedVertical.push(vid);
          }else{
            const rindex = this.state.selectedVertical.indexOf(vid);
            this.state.selectedVertical.splice(rindex,1);
          }
        this.setState({selectedVertical:this.state.selectedVertical});
        this.updateList();
    }

    updateProductType = (vid) => {
        if(!this.state.selectedProductType.includes(vid)){
            this.state.selectedProductType.push(vid);
          }else{
            const rindex = this.state.selectedProductType.indexOf(vid);
            this.state.selectedProductType.splice(rindex,1);
          }
        this.setState({selectedProductType:this.state.selectedProductType});
        this.updateList();
    }
    
    
    
    constructor(props) {
        super(props);
        
       
    }

    
    
    render(){
        
       
        return(
            <SelectedList.Provider value={{...this.state, updateProduct: this.updateProduct,updateSolution: this.updateSolution,updateVertical: this.updateVertical,updateProductType: this.updateProductType}}>
                {this.props.children}
            </SelectedList.Provider>
        );
    }

}

export default SelectedListProvider;
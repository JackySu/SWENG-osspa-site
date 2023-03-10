import React from "react";
export const SelectedList = React.createContext();

class SelectedListProvider extends React.Component{
    
    
    loadlist = async () => {
        const response = await fetch(`http://localhost:5297/PAList`)
        return await response.json();
      };

    loadLive = async () =>{
        var livelist = [] as any;
        var palist = await this.loadlist();

        palist.forEach(element => {
            if(element.islive=="TRUE"){
                livelist.push(element);
            }
          })
        this.setState({currentlist: livelist, loading: false});
    }

    state = {
        currentlist: undefined,
        selectedProduct: [] as any,
        selectedSolution: [] as any,
        selectedVertical: [] as any,
        selectedProductType: [] as any,
        searchInput: '',
        loading: true
    }
    updateList = async () => {
        var templist = [] as any;
        
        //this.setState({currentlist:{currentlist:newlist}});
        var palist = await this.loadlist();
        palist.forEach(element => {
            var shouldPush = true;
            if(this.state.selectedProduct.length > 0){
                //console.log("element",element.Product);
                this.state.selectedProduct.forEach(productItem => {
                    if(!element.Product.includes(productItem)){
                        shouldPush = false;
                    }    
                });
                
            }

            if(this.state.selectedSolution.length > 0){
                //console.log("element",element.Solutions);
                this.state.selectedSolution.forEach(solutionItem => {
                    if(!element.Solutions.includes(solutionItem)){
                        shouldPush = false;
                    }    
                });
               
            }

            if(this.state.selectedVertical.length > 0){
                //console.log("element",element.Vertical);
                this.state.selectedVertical.forEach(verticalItem => {
                    if(!element.Vertical.includes(verticalItem)){
                        shouldPush = false;
                    }    
                });
                
            }

            if(this.state.selectedProductType.length > 0){
                //console.log("element",element.ProductType);
                this.state.selectedProductType.forEach(productTypeItem => {
                    if(!element.ProductType.includes(productTypeItem)){
                        shouldPush = false;
                    }    
                });
                
            }
            
            if(shouldPush){
                if(this.state.searchInput!=''){
                    console.log("this.state.searchInput-->"+this.state.searchInput);
                    var lowerCaseInput=this.state.searchInput.toLowerCase();
                    
                    if((element.Heading.toLowerCase()).includes(lowerCaseInput))
                        shouldPush = true;
                    else if((element.Summary.toLowerCase()).includes(lowerCaseInput))
                        shouldPush = true;
                    else 
                        shouldPush = false;
                    
                }
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

    updateProductType = (tid) => {

        if(tid=='ALL'){
            this.state.selectedProductType=[];
        }else
            this.state.selectedProductType=[tid];
        this.setState({selectedProductType:this.state.selectedProductType});
        this.updateList();
    }
    
    searchAll = (searchInput) => {
        //This will only search the Title and description, not the tags
        this.state.searchInput=searchInput;
        this.setState({searchInput:this.state.searchInput});
        this.updateList();
    }
    
    
    constructor(props) {
        super(props);
        
       
    }

    
    
    render(){
        
        if (this.state.loading) {
            this.loadLive();
            return <div></div>
        }
        return(
            <SelectedList.Provider value={{...this.state, updateProduct: this.updateProduct,updateSolution: this.updateSolution,updateVertical: this.updateVertical,updateProductType: this.updateProductType, searchAll:this.searchAll}}>
                {this.props.children}
            </SelectedList.Provider>
        );
    }

}

export default SelectedListProvider;
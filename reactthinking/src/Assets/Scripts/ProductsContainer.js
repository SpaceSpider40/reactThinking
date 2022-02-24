import React from "react";
import SearchBar from "./ProductsContainerComponents/SearchBar"
import ProductsTable from "./ProductsContainerComponents/ProductsTable";

class ProductsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state={searchQuery:"",monthSelector:null}

        this.handleSearchBarInput = this.handleSearchBarInput.bind(this)
    }

    handleSearchBarInput = (Data, month) =>{
        if(Data!=null){
            this.setState({
            searchQuery: Data
            })
        }
        this.setState({
            monthSelector: month
            })
    }

    render(){
        return(
            <div>
                <SearchBar handleSearchBarInput={this.handleSearchBarInput}/>
                <ProductsTable searchQuery={this.state.searchQuery} selectedMonth={this.state.monthSelector}/>
            </div>
        )
    }
}

export default ProductsContainer
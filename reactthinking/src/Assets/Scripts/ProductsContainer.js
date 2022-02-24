import React from "react";
import SearchBar from "./ProductsContainerComponents/SearchBar"
import ProductsTable from "./ProductsContainerComponents/ProductsTable";

class ProductsContainer extends React.Component{
    constructor(props){
        super(props)

        this.state={searchQuery:"",monthSelector:null}
    }

    handleSearchBarInput = (Data, month) =>{
        this.setState({
            searchQuery: Data,
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
import React from "react";
import SearchBar from "./ProductsContainerComponents/SearchBar"
import ProductsTable from "./ProductsContainerComponents/ProductsTable";

class ProductsContainer extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <ProductsTable/>
            </div>
        )
    }
}

export default ProductsContainer
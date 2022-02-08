import React from "react";
import Product from "./Product";

class ProductsTable extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <div>
                <Product/>
            </div>
        )
    }
}

export default ProductsTable;
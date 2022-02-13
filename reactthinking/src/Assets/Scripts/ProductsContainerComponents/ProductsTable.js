import React from "react";
import Product from "./Product";
import database from '../../../JSONDatabase/ProductsDatabase.json'

class ProductsTable extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            sort: ""
        }
    }

    popProductsTable(){
        var productArray = [];

        
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                productArray.push(<Product index={key}/>)
            }
        }
        
        return productArray
    }

    render(){
        
        return(
            <div>
                {this.popProductsTable().map((item, index)=>(<div key={index}>{item}</div>))}
            </div>
        )
    }
}

export default ProductsTable;
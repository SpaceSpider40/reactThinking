import React from "react";
import {ProductLabel, ProductPicture, ProductTitle} from './ProductComponents'

class Product extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (<div>
            <ProductLabel index={0}/>
            <ProductPicture index={0}/>
            <ProductTitle index={0}/>
        </div>)
    }
}

export default Product
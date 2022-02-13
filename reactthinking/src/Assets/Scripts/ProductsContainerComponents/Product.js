import React from "react";
import {ProductLabel, ProductPicture, ProductTitle} from './ProductComponents'

class Product extends React.Component{
    constructor(props) {
        super(props)
    }

    render(){
        return (<div>
            <ProductLabel index={this.props.index}/>
            <ProductPicture index={this.props.index}/>
            <ProductTitle index={this.props.index}/>
        </div>)
    }
}

export default Product
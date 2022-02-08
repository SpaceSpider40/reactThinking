import React from 'react';
import database from '../../JSONDatabase/ProductsDatabase.json';
import ProductsContainer from './ProductsContainer';


class MainWindow extends React.Component {
    render(){
        return(
            <div>
                <ProductsContainer/>
            </div>
        )
    }
}

export default MainWindow;
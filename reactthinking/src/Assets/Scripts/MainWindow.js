import React from 'react';
import database from '../../JSONDatabase/ProductsDatabase.json';


class MainWindow extends React.Component {
    constructor(props) {
        super(props)


    }

    render(){
        return(
            <div>
                <img src={database[0]["productImg"]}/>
            </div>
        )
    }
}

export default MainWindow;
import React from "react";
import Product from "./Product";
import database from '../../../JSONDatabase/ProductsDatabase.json'
import style from '../../Style/mainStyle.module.css'

class ProductsTable extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: "",
            productList: [],
            selectedMonth: props.selectedMonth
        }
        this.popProductsTable()
    }

    componentWillReceiveProps (props){
        
        this.state.searchQuery = props.searchQuery
        this.state.selectedMonth = props.selectedMonth
        this.updateTable(props.searchQuery)
        
    }

    popProductsTable(){
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                this.setState({
                    productList: this.state.productList.push(<Product key={key} index={key}/>)
                })
            }
        }
    }

    updateTable(searchQuery){
        this.setState({
            productList: this.state.productList = []
        })
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                switch(searchQuery){
                    case "":
                        if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                            this.state.productList.push(<Product key={key} index={key}/>)
                        }else if(this.state.selectedMonth===null){
                            this.state.productList.push(<Product key={key} index={key}/>)
                        }
                    break;
                    case "premiere":
                    case "Premiere":
                        if(database[key]["label"]==="Premiere"){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }else if(this.state.selectedMonth===null){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }
                        }
                    break;
                    case "reprint":
                    case "Reprint":
                        if(database[key]["label"]==="Reprint"){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }else if(this.state.selectedMonth===null){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }
                        }
                    break;
                    default:
                        if(database[key]["productTitle"].includes(searchQuery)){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }else if(this.state.selectedMonth===null){
                                this.state.productList.push(<Product key={key} index={key}/>)
                            }
                        }
                    break;
               }
            }
        }
    }

    render(){
        return(
            <div className={style.productContainer}>
                {this.state.productList.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
            </div>
        )
    }
}

export default ProductsTable;
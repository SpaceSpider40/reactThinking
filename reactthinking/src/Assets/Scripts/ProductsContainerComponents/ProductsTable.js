import React from "react";
import Product from "./Product";
import database from '../../../JSONDatabase/ProductsDatabase.json'
import style from '../../Style/mainStyle.module.css'

class ProductsTable extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: "",

            productList: {
                January: [],
                February: [],
                March: [],
                April: [],
                May: [],
                June: [],
                July: [],
                August: [],
                September: [],
                October: [],
                November: [],
                December: [],
                none: []
            },

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
                switch(database[key]["releaseDate"]){
                    case "1":
                        this.state.productList.January.push(<Product key={key} index={key}/>)
                        break
                    case "2":
                        this.state.productList.February.push(<Product key={key} index={key}/>)
                        break
                    case "3":
                        this.state.productList.March.push(<Product key={key} index={key}/>)
                        break
                    case "4":
                        this.state.productList.April.push(<Product key={key} index={key}/>)
                        break
                    case "5":
                        this.state.productList.May.push(<Product key={key} index={key}/>)
                        break
                    case "6":
                        this.state.productList.June.push(<Product key={key} index={key}/>)
                        break
                    case "7":
                        this.state.productList.July.push(<Product key={key} index={key}/>)
                        break
                    case "8":
                        this.state.productList.August.push(<Product key={key} index={key}/>)
                        break
                    case "9":
                        this.state.productList.September.push(<Product key={key} index={key}/>)
                        break
                    case "10":
                        this.state.productList.October.push(<Product key={key} index={key}/>)
                        break
                    case "11":
                        this.state.productList.November.push(<Product key={key} index={key}/>)
                        break
                    case "12":
                        this.state.productList.December.push(<Product key={key} index={key}/>)
                        break
                    default:
                        console.error("ERROR IN MONTHS SWITCH CASE")
                    break
                }
            }
        }
    }

    updateTable(searchQuery){
        this.setState({
            productList: this.state.productList = {January: [], February: [], March: [], April: [], May: [], June: [], July: [], August: [], September: [], October: [], November: [], December: [], none: []}
        })
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                let productLabel = database[key]["label"]
                let productTitle = database[key]["productTitle"]
                switch(searchQuery.toUpperCase()){
                    case "":
                        if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                            this.state.productList.none.push(<Product key={key} index={key}/>)
                            console.log(this.state.productList.none)
                        }else if(this.state.selectedMonth===null){
                            switch(database[key]["releaseDate"]){
                                case "1":
                                    this.state.productList.January.push(<Product key={key} index={key}/>)
                                    break
                                case "2":
                                    this.state.productList.February.push(<Product key={key} index={key}/>)
                                    break
                                case "3":
                                    this.state.productList.March.push(<Product key={key} index={key}/>)
                                    break
                                case "4":
                                    this.state.productList.April.push(<Product key={key} index={key}/>)
                                    break
                                case "5":
                                    this.state.productList.May.push(<Product key={key} index={key}/>)
                                    break
                                case "6":
                                    this.state.productList.June.push(<Product key={key} index={key}/>)
                                    break
                                case "7":
                                    this.state.productList.July.push(<Product key={key} index={key}/>)
                                    break
                                case "8":
                                    this.state.productList.August.push(<Product key={key} index={key}/>)
                                    break
                                case "9":
                                    this.state.productList.September.push(<Product key={key} index={key}/>)
                                    break
                                case "10":
                                    this.state.productList.October.push(<Product key={key} index={key}/>)
                                    break
                                case "11":
                                    this.state.productList.November.push(<Product key={key} index={key}/>)
                                    break
                                case "12":
                                    this.state.productList.December.push(<Product key={key} index={key}/>)
                                    break
                                default:
                                    console.error("ERROR IN MONTHS SWITCH CASE")
                                break
                            }
                        }
                    break;
                    case "PREMIERE":
                        if(productLabel.toUpperCase()==="PREMIERE"){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.none.push(<Product key={key} index={key}/>)
                                console.log(this.state.productList.none)
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.push(<Product key={key} index={key}/>)
                                        break
                                    case "2":
                                        this.state.productList.February.push(<Product key={key} index={key}/>)
                                        break
                                    case "3":
                                        this.state.productList.March.push(<Product key={key} index={key}/>)
                                        break
                                    case "4":
                                        this.state.productList.April.push(<Product key={key} index={key}/>)
                                        break
                                    case "5":
                                        this.state.productList.May.push(<Product key={key} index={key}/>)
                                        break
                                    case "6":
                                        this.state.productList.June.push(<Product key={key} index={key}/>)
                                        break
                                    case "7":
                                        this.state.productList.July.push(<Product key={key} index={key}/>)
                                        break
                                    case "8":
                                        this.state.productList.August.push(<Product key={key} index={key}/>)
                                        break
                                    case "9":
                                        this.state.productList.September.push(<Product key={key} index={key}/>)
                                        break
                                    case "10":
                                        this.state.productList.October.push(<Product key={key} index={key}/>)
                                        break
                                    case "11":
                                        this.state.productList.November.push(<Product key={key} index={key}/>)
                                        break
                                    case "12":
                                        this.state.productList.December.push(<Product key={key} index={key}/>)
                                        break
                                    default:
                                        console.error("ERROR IN MONTHS SWITCH CASE")
                                    break
                                }
                            }
                        }
                    break;
                    case "REPRINT":
                        if(productLabel.toUpperCase()==="REPRINT"){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.none.push(<Product key={key} index={key}/>)
                                console.log(this.state.productList.none)
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.push(<Product key={key} index={key}/>)
                                        break
                                    case "2":
                                        this.state.productList.February.push(<Product key={key} index={key}/>)
                                        break
                                    case "3":
                                        this.state.productList.March.push(<Product key={key} index={key}/>)
                                        break
                                    case "4":
                                        this.state.productList.April.push(<Product key={key} index={key}/>)
                                        break
                                    case "5":
                                        this.state.productList.May.push(<Product key={key} index={key}/>)
                                        break
                                    case "6":
                                        this.state.productList.June.push(<Product key={key} index={key}/>)
                                        break
                                    case "7":
                                        this.state.productList.July.push(<Product key={key} index={key}/>)
                                        break
                                    case "8":
                                        this.state.productList.August.push(<Product key={key} index={key}/>)
                                        break
                                    case "9":
                                        this.state.productList.September.push(<Product key={key} index={key}/>)
                                        break
                                    case "10":
                                        this.state.productList.October.push(<Product key={key} index={key}/>)
                                        break
                                    case "11":
                                        this.state.productList.November.push(<Product key={key} index={key}/>)
                                        break
                                    case "12":
                                        this.state.productList.December.push(<Product key={key} index={key}/>)
                                        break
                                    default:
                                        console.error("ERROR IN MONTHS SWITCH CASE")
                                    break
                                }
                            }
                        }
                    break;
                    default:
                        if((productTitle.toUpperCase()).includes(searchQuery.toUpperCase())){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.none.push(<Product key={key} index={key}/>)
                                console.log(this.state.productList.none)
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.push(<Product key={key} index={key}/>)
                                        break
                                    case "2":
                                        this.state.productList.February.push(<Product key={key} index={key}/>)
                                        break
                                    case "3":
                                        this.state.productList.March.push(<Product key={key} index={key}/>)
                                        break
                                    case "4":
                                        this.state.productList.April.push(<Product key={key} index={key}/>)
                                        break
                                    case "5":
                                        this.state.productList.May.push(<Product key={key} index={key}/>)
                                        break
                                    case "6":
                                        this.state.productList.June.push(<Product key={key} index={key}/>)
                                        break
                                    case "7":
                                        this.state.productList.July.push(<Product key={key} index={key}/>)
                                        break
                                    case "8":
                                        this.state.productList.August.push(<Product key={key} index={key}/>)
                                        break
                                    case "9":
                                        this.state.productList.September.push(<Product key={key} index={key}/>)
                                        break
                                    case "10":
                                        this.state.productList.October.push(<Product key={key} index={key}/>)
                                        break
                                    case "11":
                                        this.state.productList.November.push(<Product key={key} index={key}/>)
                                        break
                                    case "12":
                                        this.state.productList.December.push(<Product key={key} index={key}/>)
                                        break
                                    default:
                                        console.error("ERROR IN MONTHS SWITCH CASE")
                                    break
                                }
                            }
                        }
                    break;
               }
            }
        }
    }

    render(){  
        if(Object.keys(this.state.productList.none).length === 0 && Object.keys(this.state.productList.January).length!==0){
            return(
                <div className={style.productContainer}>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>January</div>
                        {this.state.productList.January.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>February</div>
                        {this.state.productList.February.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>March</div>
                        {this.state.productList.March.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>April</div>
                        {this.state.productList.April.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>May</div>
                        {this.state.productList.May.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>June</div>
                        {this.state.productList.June.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>July</div>
                        {this.state.productList.July.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>August</div>
                        {this.state.productList.August.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>September</div>
                        {this.state.productList.September.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>October</div>
                        {this.state.productList.October.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>November</div>
                        {this.state.productList.November.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                    <div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>December</div>
                        {this.state.productList.December.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                    </div>
                </div>
            )
        }else{
            return(
                <div className={style.productCategory}>
                    {this.state.productList.none.map((item, index)=>(<div className={style.productOuter} key={index}>{item}</div>))}
                </div>
            )
        }
        
        
    }
}

export default ProductsTable;
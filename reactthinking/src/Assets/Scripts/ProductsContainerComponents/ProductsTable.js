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
                January: {year:[],items:[]},
                February: {year:[],items:[]},
                March: {year:[],items:[]},
                April: {year:[],items:[]},
                May: {year:[],items:[]},
                June: {year:[],items:[]},
                July: {year:[],items:[]},
                August: {year:[],items:[]},
                September: {year:[],items:[]},
                October: {year:[],items:[]},
                November: {year:[],items:[]},
                December: {year:[],items:[]},
                none: {year:[],items:[]}
            },

            selectedMonth: props.selectedMonth
        }
        this.popProductsTable()
    }

    componentWillReceiveProps (props){
        
        this.state.searchQuery = props.searchQuery
        this.state.selectedMonth = props.selectedMonth
        this.updateTable(props.searchQuery)
        
    }p

    popProductsTable(){
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                switch(database[key]["releaseDate"]){
                    case "1":
                        this.state.productList.January.items.push(<Product key={key} index={key}/>)
                        this.state.productList.January.year.push(database[key]["year"]);
                        break
                    case "2":
                        this.state.productList.February.items.push(<Product key={key} index={key}/>)
                        this.state.productList.February.year.push(database[key]["year"]);
                        break
                    case "3":
                        this.state.productList.March.items.push(<Product key={key} index={key}/>)
                        this.state.productList.March.year.push(database[key]["year"]);
                        break
                    case "4":
                        this.state.productList.April.items.push(<Product key={key} index={key}/>)
                        this.state.productList.April.year.push(database[key]["year"]);
                        break
                    case "5":
                        this.state.productList.May.items.push(<Product key={key} index={key}/>)
                        this.state.productList.May.year.push(database[key]["year"]);
                        break
                    case "6":
                        this.state.productList.June.items.push(<Product key={key} index={key}/>)
                        this.state.productList.June.year.push(database[key]["year"]);
                        break
                    case "7":
                        this.state.productList.July.items.push(<Product key={key} index={key}/>)
                        this.state.productList.July.year.push(database[key]["year"]);
                        break
                    case "8":
                        this.state.productList.August.items.push(<Product key={key} index={key}/>)
                        this.state.productList.August.year.push(database[key]["year"]);
                        break
                    case "9":
                        this.state.productList.September.items.push(<Product key={key} index={key}/>)
                        this.state.productList.September.year.push(database[key]["year"]);
                        break
                    case "10":
                        this.state.productList.October.items.push(<Product key={key} index={key}/>)
                        this.state.productList.October.year.push(database[key]["year"]);
                        break
                    case "11":
                        this.state.productList.November.items.push(<Product key={key} index={key}/>)
                        this.state.productList.November.year.push(database[key]["year"]);
                        break
                    case "12":
                        this.state.productList.December.items.push(<Product key={key} index={key}/>)
                        this.state.productList.December.year.push(database[key]["year"]);
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
            productList: this.state.productList = {
                January: {year:[],items:[]},
                February: {year:[],items:[]},
                March: {year:[],items:[]},
                April: {year:[],items:[]},
                May: {year:[],items:[]},
                June: {year:[],items:[]},
                July: {year:[],items:[]},
                August: {year:[],items:[]},
                September: {year:[],items:[]},
                October: {year:[],items:[]},
                November: {year:[],items:[]},
                December: {year:[],items:[]},
                none: {year:[],items:[]}
            },
        })
        for (var key in database) {
            if (database.hasOwnProperty(key)) {
                let productLabel = database[key]["label"]
                let productTitle = database[key]["productTitle"]
                switch(searchQuery.toUpperCase()){
                    case "":
                        if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                            this.state.productList.none.items.push(<Product key={key} index={key}/>)
                            this.state.productList.none.year.push(database[key]["year"]);
                        }else if(this.state.selectedMonth===null){
                            switch(database[key]["releaseDate"]){
                                case "1":
                                    this.state.productList.January.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.January.year.push(database[key]["year"]);
                                    break
                                case "2":
                                    this.state.productList.February.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.February.year.push(database[key]["year"]);
                                    break
                                case "3":
                                    this.state.productList.March.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.March.year.push(database[key]["year"]);
                                    break
                                case "4":
                                    this.state.productList.April.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.April.year.push(database[key]["year"]);
                                    break
                                case "5":
                                    this.state.productList.May.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.May.year.push(database[key]["year"]);
                                    break
                                case "6":
                                    this.state.productList.June.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.June.year.push(database[key]["year"]);
                                    break
                                case "7":
                                    this.state.productList.July.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.July.year.push(database[key]["year"]);
                                    break
                                case "8":
                                    this.state.productList.August.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.August.year.push(database[key]["year"]);
                                    break
                                case "9":
                                    this.state.productList.September.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.September.year.push(database[key]["year"]);
                                    break
                                case "10":
                                    this.state.productList.October.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.October.year.push(database[key]["year"]);
                                    break
                                case "11":
                                    this.state.productList.November.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.November.year.push(database[key]["year"]);
                                    break
                                case "12":
                                    this.state.productList.December.items.push(<Product key={key} index={key}/>)
                                    this.state.productList.December.year.push(database[key]["year"]);
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
                                this.state.productList.none.items.push(<Product key={key} index={key}/>)
                                this.state.productList.none.year.push(database[key]["year"]);
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.January.year.push(database[key]["year"]);
                                        break
                                    case "2":
                                        this.state.productList.February.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.February.year.push(database[key]["year"]);
                                        break
                                    case "3":
                                        this.state.productList.March.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.March.year.push(database[key]["year"]);
                                        break
                                    case "4":
                                        this.state.productList.April.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.April.year.push(database[key]["year"]);
                                        break
                                    case "5":
                                        this.state.productList.May.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.May.year.push(database[key]["year"]);
                                        break
                                    case "6":
                                        this.state.productList.June.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.June.year.push(database[key]["year"]);
                                        break
                                    case "7":
                                        this.state.productList.July.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.July.year.push(database[key]["year"]);
                                        break
                                    case "8":
                                        this.state.productList.August.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.August.year.push(database[key]["year"]);
                                        break
                                    case "9":
                                        this.state.productList.September.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.September.year.push(database[key]["year"]);
                                        break
                                    case "10":
                                        this.state.productList.October.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.October.year.push(database[key]["year"]);
                                        break
                                    case "11":
                                        this.state.productList.November.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.November.year.push(database[key]["year"]);
                                        break
                                    case "12":
                                        this.state.productList.December.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.December.year.push(database[key]["year"]);
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
                                this.state.productList.none.items.push(<Product key={key} index={key}/>)
                                this.state.productList.none.year.push(database[key]["year"]);
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.January.year.push(database[key]["year"]);
                                        break
                                    case "2":
                                        this.state.productList.February.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.February.year.push(database[key]["year"]);
                                        break
                                    case "3":
                                        this.state.productList.March.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.March.year.push(database[key]["year"]);
                                        break
                                    case "4":
                                        this.state.productList.April.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.April.year.push(database[key]["year"]);
                                        break
                                    case "5":
                                        this.state.productList.May.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.May.year.push(database[key]["year"]);
                                        break
                                    case "6":
                                        this.state.productList.June.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.June.year.push(database[key]["year"]);
                                        break
                                    case "7":
                                        this.state.productList.July.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.July.year.push(database[key]["year"]);
                                        break
                                    case "8":
                                        this.state.productList.August.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.August.year.push(database[key]["year"]);
                                        break
                                    case "9":
                                        this.state.productList.September.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.September.year.push(database[key]["year"]);
                                        break
                                    case "10":
                                        this.state.productList.October.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.October.year.push(database[key]["year"]);
                                        break
                                    case "11":
                                        this.state.productList.November.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.November.year.push(database[key]["year"]);
                                        break
                                    case "12":
                                        this.state.productList.December.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.December.year.push(database[key]["year"]);
                                        break
                                    default:
                                        console.error("ERROR IN MONTHS SWITCH CASE")
                                    break
                                }
                            }
                        }
                    break;
                    case database[key]["year"]:
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.none.items.push(<Product key={key} index={key}/>)
                                this.state.productList.none.year.push(database[key]["year"]);
                            }else{
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.January.year.push(database[key]["year"]);
                                        break
                                    case "2":
                                        this.state.productList.February.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.February.year.push(database[key]["year"]);
                                        break
                                    case "3":
                                        this.state.productList.March.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.March.year.push(database[key]["year"]);
                                        break
                                    case "4":
                                        this.state.productList.April.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.April.year.push(database[key]["year"]);
                                        break
                                    case "5":
                                        this.state.productList.May.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.May.year.push(database[key]["year"]);
                                        break
                                    case "6":
                                        this.state.productList.June.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.June.year.push(database[key]["year"]);
                                        break
                                    case "7":
                                        this.state.productList.July.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.July.year.push(database[key]["year"]);
                                        break
                                    case "8":
                                        this.state.productList.August.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.August.year.push(database[key]["year"]);
                                        break
                                    case "9":
                                        this.state.productList.September.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.September.year.push(database[key]["year"]);
                                        break
                                    case "10":
                                        this.state.productList.October.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.October.year.push(database[key]["year"]);
                                        break
                                    case "11":
                                        this.state.productList.November.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.November.year.push(database[key]["year"]);
                                        break
                                    case "12":
                                        this.state.productList.December.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.December.year.push(database[key]["year"]);
                                        break
                                    default:
                                        console.error("ERROR IN MONTHS SWITCH CASE")
                                    break
                                }
                           }
                        break
                    default:
                        if((productTitle.toUpperCase()).includes(searchQuery.toUpperCase())){
                            if(this.state.selectedMonth!==null&&this.state.selectedMonth.toString()===database[key]["releaseDate"]){
                                this.state.productList.none.items.push(<Product key={key} index={key}/>)
                                this.state.productList.none.year.push(database[key]["year"]);
                            }else if(this.state.selectedMonth===null){
                                switch(database[key]["releaseDate"]){
                                    case "1":
                                        this.state.productList.January.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.January.year.push(database[key]["year"]);
                                        break
                                    case "2":
                                        this.state.productList.February.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.February.year.push(database[key]["year"]);
                                        break
                                    case "3":
                                        this.state.productList.March.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.March.year.push(database[key]["year"]);
                                        break
                                    case "4":
                                        this.state.productList.April.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.April.year.push(database[key]["year"]);
                                        break
                                    case "5":
                                        this.state.productList.May.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.May.year.push(database[key]["year"]);
                                        break
                                    case "6":
                                        this.state.productList.June.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.June.year.push(database[key]["year"]);
                                        break
                                    case "7":
                                        this.state.productList.July.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.July.year.push(database[key]["year"]);
                                        break
                                    case "8":
                                        this.state.productList.August.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.August.year.push(database[key]["year"]);
                                        break
                                    case "9":
                                        this.state.productList.September.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.September.year.push(database[key]["year"]);
                                        break
                                    case "10":
                                        this.state.productList.October.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.October.year.push(database[key]["year"]);
                                        break
                                    case "11":
                                        this.state.productList.November.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.November.year.push(database[key]["year"]);
                                        break
                                    case "12":
                                        this.state.productList.December.items.push(<Product key={key} index={key}/>)
                                        this.state.productList.December.year.push(database[key]["year"]);
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

    sortItemsByYear(item, index, monthState){
        for(let i = 0; i<monthState.year.length;i++){

            if(item===monthState.year[index]){
                this.year = monthState.year[i]
                return monthState.items[index]
            }else {
                return null
            }
        }
    }

    render(){  
        if(Object.keys(this.state.productList.none.items).length === 0){
            let avalYears=[]
            this.JanuaryCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.January.year)].length; i++){
                avalYears = [...new Set(this.state.productList.January.year)];
                let label
                if(Object.keys(this.state.productList.January.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>January {avalYears[i]}</div>
                }
                this.JanuaryCategory.y.push(avalYears[i])
                this.JanuaryCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.January.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.January)
                        ))}
                </div>))
            }

            this.FebruaryCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.February.year)].length; i++){
                avalYears = [...new Set(this.state.productList.February.year)];
                let label
                if(Object.keys(this.state.productList.February.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>February {avalYears[i]}</div>
                }
                this.FebruaryCategory.y.push(avalYears[i])
                this.FebruaryCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.February.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.February)
                        ))}
                </div>))
            }

            this.MarchCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.March.year)].length; i++){
                avalYears = [...new Set(this.state.productList.March.year)];
                let label
                if(Object.keys(this.state.productList.March.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>March {avalYears[i]}</div>
                }
                this.MarchCategory.y.push(avalYears[i])
                this.MarchCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.March.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.March)
                        ))}
                </div>))
            }

            this.AprilCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.April.year)].length; i++){
                avalYears = [...new Set(this.state.productList.April.year)];
                let label
                if(Object.keys(this.state.productList.April.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>April {avalYears[i]}</div>
                }
                this.AprilCategory.y.push(avalYears[i])
                this.AprilCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.April.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.April)
                        ))}
                </div>))
            }

            this.MayCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.May.year)].length; i++){
                avalYears = [...new Set(this.state.productList.May.year)];
                let label
                if(Object.keys(this.state.productList.May.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>May {avalYears[i]}</div>
                }
                this.MayCategory.y.push(avalYears[i])
                this.MayCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.May.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.May)
                        ))}
                </div>))
            }

            this.JuneCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.June.year)].length; i++){
                avalYears = [...new Set(this.state.productList.June.year)];
                let label
                if(Object.keys(this.state.productList.June.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>June {avalYears[i]}</div>
                }
                this.JanuaryCategory.y.push(avalYears[i])
                this.JuneCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.June.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.June)
                        ))}
                </div>))
            }

            this.JulyCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.July.year)].length; i++){
                avalYears = [...new Set(this.state.productList.July.year)];
                let label
                if(Object.keys(this.state.productList.July.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>July {avalYears[i]}</div>
                }
                this.JulyCategory.y.push(avalYears[i])
                this.JulyCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.July.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.July)
                        ))}
                </div>))
            }

            this.AugustCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.August.year)].length; i++){
                avalYears = [...new Set(this.state.productList.August.year)];
                let label
                if(Object.keys(this.state.productList.August.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>August {avalYears[i]}</div>
                }
                this.AugustCategory.y.push(avalYears[i])
                this.AugustCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.August.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.August)
                        ))}
                </div>))
            }

            this.SeptemberCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.September.year)].length; i++){
                avalYears = [...new Set(this.state.productList.September.year)];
                let label
                if(Object.keys(this.state.productList.September.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>September {avalYears[i]}</div>
                }
                this.SeptemberCategory.y.push(avalYears[i])
                this.SeptemberCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.September.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.September)
                        ))}
                </div>))
            }
            this.OctoberCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.October.year)].length; i++){
                avalYears = [...new Set(this.state.productList.October.year)];
                let label
                if(Object.keys(this.state.productList.October.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>October {avalYears[i]}</div>
                }
                this.OctoberCategory.y.push(avalYears[i])
                this.OctoberCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.October.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.October)
                        ))}
                </div>))
            }

            this.NovemberCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.November.year)].length; i++){
                avalYears = [...new Set(this.state.productList.November.year)];
                let label
                if(Object.keys(this.state.productList.November.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>November {avalYears[i]}</div>
                }
                this.NovemberCategory.y.push(avalYears[i])
                this.NovemberCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.November.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.November)
                        ))}
                </div>))
            }

            this.DecemberCategory={cat:[],y:[]}
            for(let i = 0; i<[...new Set(this.state.productList.December.year)].length; i++){
                avalYears = [...new Set(this.state.productList.December.year)];
                let label
                if(Object.keys(this.state.productList.December.items).length !== 0){
                    label = <div className={style.productCategoryLabel}>December {avalYears[i]}</div>
                }
                this.DecemberCategory.y.push(avalYears[i])
                this.DecemberCategory.cat.push((<div className={style.productCategory}>
                        {label}
                        {this.state.productList.December.year.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.December)
                        ))}
                </div>))
            }
            console.log(this.JanuaryCategory)

            let sortThisStupidStaff = [];
            for(let i=0;i<2;i++){
                avalYears=[]
                for (var key in database) {
                    if (database.hasOwnProperty(key)){
                        avalYears.push((database[key]['year']))
                    }
                }
                avalYears = [...new Set(avalYears)];
                for(let j=0;j<this.JanuaryCategory.y.length;j++){
                    if(this.JanuaryCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.JanuaryCategory.cat[j]) }else{console.log("neg")}
                }
                
                for(let j=0;j<this.FebruaryCategory.y.length;j++){
                    if(this.FebruaryCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.FebruaryCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.MarchCategory.y.length;j++){
                    if(this.MarchCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.MarchCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.AprilCategory.y.length;j++){
                    if(this.AprilCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.AprilCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.JuneCategory.y.length;j++){
                    if(this.JuneCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.JuneCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.JulyCategory.y.length;j++){
                    if(this.JulyCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.JulyCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.AugustCategory.y.length;j++){
                    if(this.AugustCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.AugustCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.SeptemberCategory.y.length;j++){
                    if(this.SeptemberCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.SeptemberCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.OctoberCategory.y.length;j++){
                    if(this.OctoberCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.OctoberCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.NovemberCategory.y.length;j++){
                    if(this.NovemberCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.NovemberCategory.cat[j]) }else{console.log("neg")}
                }

                for(let j=0;j<this.DecemberCategory.y.length;j++){
                    if(this.DecemberCategory.y[j]===avalYears[i]){ sortThisStupidStaff.push(this.DecemberCategory.cat[j]) }else{console.log("neg")}
                }
            }

            return(
                <div className={style.productContainer}>
                    
                    {sortThisStupidStaff.map(i=>(i))}

                </div>
            )
        }else{
            let prep = [];
            let avalYears = [...new Set(this.state.productList.none.year)]
            switch(this.state.selectedMonth){
                case 1:
                    for(let i=0;i<avalYears.length;i++){
                            prep.push(<div className={style.productCategory}>
                            <div className={style.productCategoryLabel}>January {avalYears[i]}</div>
                            {this.state.productList.none.items.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                            ))}
                            </div>)                        
                    }
                    return(
                        prep.map(i=>(i))
                    )
                case 2:
                    for(let i=0;i<avalYears.length;i++){
                            prep.push(<div className={style.productCategory}>
                            <div className={style.productCategoryLabel}>February {avalYears[i]}</div>
                            {this.state.productList.none.items.map((item, index)=>(
                            this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                            ))}
                            </div>)                        
                    }
                    return(
                        prep.map(i=>(i))
                    )
                case 3:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>March {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 4:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>April {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 5:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>May {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 6:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>June {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 7:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>July {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 8:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>August {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 9:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>September {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 10:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>October {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 11:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>November {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                case 12:
                    for(let i=0;i<avalYears.length;i++){
                        prep.push(<div className={style.productCategory}>
                        <div className={style.productCategoryLabel}>December {avalYears[i]}</div>
                        {this.state.productList.none.items.map((item, index)=>(
                        this.sortItemsByYear(avalYears[i], index, this.state.productList.none)
                        ))}
                        </div>)                        
                }
                return(
                    prep.map(i=>(i))
                )
                default:
                    return null
            }
            
        }
        
        
    }
}

export default ProductsTable;
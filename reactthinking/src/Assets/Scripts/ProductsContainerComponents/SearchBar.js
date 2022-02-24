import React from "react";
import style from "../../Style/mainStyle.module.css"

class SearchBar extends React.Component{
    constructor(props){
        super(props)

        this.state={searchQuery: ""}

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {    
        this.setState({
            [event.target.name]: event.target.value
        });

        this.props.handleSearchBarInput(event.target.value, null);
    }

    handleClick(){
        this.setState({searchQuery: ""})

        this.props.handleSearchBarInput("");
    }

    handleClickMonths(month){
        this.props.handleSearchBarInput("", month);
    }

    render(){
        return(
            <div className={style.searchBarContainer} >
                <div className={style.searchBar}>
                    <input placeholder="Enter search pharse here" type="text" name="searchQuery" value={this.state.searchQuery} onChange={this.handleChange}/>
                    <button onClick={()=>this.handleClick()}>&times;</button>
                </div>
                <div className={style.monthsBar}>
                    <button onClick={()=>this.handleClickMonths(1)}>January</button>
                    <button onClick={()=>this.handleClickMonths(2)}>February</button>
                    <button onClick={()=>this.handleClickMonths(3)}>March</button>
                    <button onClick={()=>this.handleClickMonths(4)}>April</button>
                    <button onClick={()=>this.handleClickMonths(5)}>May</button>
                    <button onClick={()=>this.handleClickMonths(6)}>June</button>
                    <button onClick={()=>this.handleClickMonths(7)}>July</button>
                    <button onClick={()=>this.handleClickMonths(8)}>August</button>
                    <button onClick={()=>this.handleClickMonths(9)}>September</button>
                    <button onClick={()=>this.handleClickMonths(10)}>October</button>
                    <button onClick={()=>this.handleClickMonths(11)}>November</button>
                    <button onClick={()=>this.handleClickMonths(12)}>December</button>
                </div>
            </div>
        )
    }
}

export default SearchBar
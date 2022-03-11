import productsDatabase from '../../../JSONDatabase/ProductsDatabase.json'
import style from '../../Style/mainStyle.module.css'

export function ProductLabel(props){
    return <div className={style.ProductLabel}>{productsDatabase[props.index]["label"]}</div>
}

export function ProductPicture(props){
    return <img className={style.ProductPicture} alt="Product" src={productsDatabase[props.index]["productImg"]}/>
}

export function ProductTitle(props){
    return <div className={style.ProductTitle}>{productsDatabase[props.index]["productTitle"]}</div>
}

export function ProductMonth(props){
    switch(productsDatabase[props.index]["releaseDate"]){
        case "1":
            return <div className={style.ProductMonth}>Released: January</div>
        case "2":
            return <div className={style.ProductMonth}>Released: February</div>
        case "3":
            return <div className={style.ProductMonth}>Released: March</div>
        case "4":
            return <div className={style.ProductMonth}>Released: April</div>
        case "5":
            return <div className={style.ProductMonth}>Released: May</div>
        case "6":
            return <div className={style.ProductMonth}>Released: June</div>
        case "7":
            return <div className={style.ProductMonth}>Released: July</div>
        case "8":
            return <div className={style.ProductMonth}>Released: August</div>
        case "9":
            return <div className={style.ProductMonth}>Released: September</div>
        case "10":
            return <div className={style.ProductMonth}>Released: October</div>
        case "11":
            return <div className={style.ProductMonth}>Released: November</div>
        case "12":
            return <div className={style.ProductMonth}>Released: December</div>
        default:
            return <div>err</div>
    }
}
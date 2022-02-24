import productsDatabase from '../../../JSONDatabase/ProductsDatabase.json'
import style from '../../Style/mainStyle.module.css'

export function ProductLabel(props){
    return <div className={style.ProductLabel}>{productsDatabase[props.index]["label"]}</div>
}

export function ProductPicture(props){
    return <img className={style.ProductPicture} alt="Product image" src={productsDatabase[props.index]["productImg"]}/>
}

export function ProductTitle(props){
    return <div className={style.ProductTitle}>{productsDatabase[props.index]["productTitle"]}</div>
}
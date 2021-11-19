import React from "react"
import '../../styles/card.css'
import { AddToCartBtn } from "./Buttons"
import { Link } from "react-router-dom"

export const CardContainer = (props) => {
    return (
        <section className="container container-outer">
            <div className="section-title-container">
                <h3 className="section-title">{props.title}</h3>
                {/* <button className="btn btn-outline-primary view-all-btn">view all</button> */}
            </div>
            {/* <hr /> */}
            <div className="card-container vertical-scroll">
                {props.children}
            </div>
        </section>
    )
}

export const ProductCard = React.memo(({product}) => {
    const productId = product.id
    return (
        <div className="card viewcard" style={{padding:"10px"}}>

            <Link to={`/product/${productId}`} style={{textDecoration:"none"}}>
                <img src={product.product_photo} className="card-img-top" alt={product.name} style={{ width: "208px", height: "208px", objectFit: "contain" }} />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "72px", overflow: "hidden" }}>{product.name}</h5>
                    <p className="card-text" >MRP <span className="price-tag" style={{fontFamily:"monospace"}}>₹{product.price}</span></p>
                </div>
            </Link>
            <AddToCartBtn productId={product.id} quantity={1} />
        </div>
    )
})

export const CategoryCard = React.memo(({title}) => {
    return (
        <Link className="card categorycard viewcard" title={title} to={`/category/${title.replace(/ /g, '_')}`} style={{ height: "3rem" }}>
            <p className="card-text">{title}</p>
        </Link>
    )
})
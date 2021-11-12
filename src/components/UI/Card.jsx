import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/card.css'
import { AddToCartBtn } from "./Buttons"
import { Link } from "react-router-dom"




export const CardContainer = (props) => {
    return (
        <section className="container container-outer">
            <div className="section-title-container">
                <h3 className="section-title">{props.title}</h3>
                <button className="btn btn-outline-primary view-all-btn">view all</button>
            </div>
            {/* <hr /> */}
            <div className="card-container vertical-scroll">
                {props.children}
            </div>
        </section>
    )
}

export const ProductCard = (props) => {
    const productId = props.id
    return (
        <Link className="card" to={`/product/${productId}`}>
            <img src={props.logo} className="card-img-top" alt={props.title} />
            <div className="card-body">
                <h5 className="card-title">product name</h5>
                <p className="card-text">MRP <span className="price-tag">₹{props.price}</span></p>
                <AddToCartBtn/>
            </div>
        </Link>
    )
}

export const CategoryCard = (props) => {
    return (
        <Link className="card categorycard" title={props.title} to="/category">
            <img src={props.logo} alt={props.title} className="card-img" />
                <p className="card-text">Category name</p>
        </Link>
    )
}
import React from "react";
import {Link} from "react-router-dom"
import "../../styles/cartProductStyle.css";
import UsersCartAPI from "../../data/UsersCartAPI"
import logo from "../../images/coronavirus.png";

function CartProduct(props) {
    return <div className="product">
        <div className="image-container">
            <img className="image" src={props.product.product_photo} alt="logo"/>
        </div>
        <div className="description">
            {props.product.description}
        </div>
        <div className="price">&#8377;{props.product.price*props.product.quantity}</div>
        <div className="quantity-selector">
            <Link to={`/user/${props.userId}/cart`}>
                <button className="btn-minus" onClick={() => {
                    if(props.product.quantity > 1) {
                        UsersCartAPI.updateQuantity(props.userId, props.product.id, (props.product.quantity - 1))
                    }
                }}>-</button>
            </Link>
            <input className="quantity" type="text" value={props.product.quantity} readOnly/>
            <Link to={`/user/${props.userId}/cart`}>
                <button className="btn-plus" onClick={() => {
                    if(props.product.quantity < props.product.stock) {
                        UsersCartAPI.updateQuantity(props.userId, props.product.id, (props.product.quantity + 1))
                    }
                }}>+</button>
            </Link>
        </div>
        <div className="button-list">
            <Link to="/order-confirm">
                <button className="buy-btn" onClick={() => {
                    if(UsersCartAPI.getAddress(props.userId) === "" || UsersCartAPI.getAddress(props.userId) === undefined) {
                        alert("You have not entered your address. Your order is confirmed for now. Our shipping team will get in touch with you to record your shipping details.")
                    }
                    UsersCartAPI.updateProductDB(props.product.id, props.product.quantity)
                    UsersCartAPI.removeProduct(props.userId, props.product.id)
                }}>BUY NOW</button>
            </Link>
            <Link to={`/user/${props.userId}/cart`}>
                <button className="remove-btn" onClick={() => {
                    UsersCartAPI.removeProduct(props.userId, props.product.id)
                }}>REMOVE FROM CART</button>
            </Link>
        </div>
    </div>
}

export default CartProduct;
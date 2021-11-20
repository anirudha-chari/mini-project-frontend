import React, {useState} from "react";
import {Link} from "react-router-dom"
import "../../styles/cartProductStyle.css";
import UsersCartAPI from "../../data/UsersCartAPI"
import axios from "axios";
import { BASE_URL, IMAGE_URL } from "../../constants/URL";

function CartProduct({product, userId}) {
    const [image, setImage] = useState()
    axios.get(BASE_URL+`/products/${product.id}`)
    .then(res => res.data)
    .then(data => setImage(IMAGE_URL+data.product_photo))
    return <div className="product">
        <div className="image-container">
            <img className="image" src={image} alt="logo"/>
        </div>
        <div className="description">
            {product.description}
        </div>
        <div className="price">&#8377;{product.price*product.quantity}</div>
        <div className="quantity-selector">
            <Link to={`/user/${userId}/cart`}>
                <button className="btn-minus" onClick={() => {
                    if(product.quantity > 1) {
                        UsersCartAPI.updateQuantity(userId, product.id, (product.quantity - 1))
                    }
                }}>-</button>
            </Link>
            <input className="quantity" type="text" value={product.quantity} readOnly/>
            <Link to={`/user/${userId}/cart`}>
                <button className="btn-plus" onClick={() => {
                    if(product.quantity < product.stock) {
                        UsersCartAPI.updateQuantity(userId, product.id, (product.quantity + 1))
                    }
                }}>+</button>
            </Link>
        </div>
        <div className="button-list">
            <Link to="/order-confirm">
                <button className="buy-btn" onClick={() => {
                    if(UsersCartAPI.getAddress(userId) === "" || UsersCartAPI.getAddress(userId) === undefined) {
                        alert("You have not entered your address. Your order is confirmed for now. Our shipping team will get in touch with you to record your shipping details.")
                    }
                    UsersCartAPI.updateProductDB(product.id, product.quantity)
                    UsersCartAPI.removeProduct(userId, product.id)
                }}>BUY NOW</button>
            </Link>
            <Link to={`/user/${userId}/cart`}>
                <button className="remove-btn" onClick={() => {
                    UsersCartAPI.removeProduct(userId, product.id)
                }}>REMOVE FROM CART</button>
            </Link>
        </div>
    </div>
}

export default CartProduct;
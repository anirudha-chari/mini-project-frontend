import React from "react";
import {Link} from "react-router-dom"
import "../styles/productListStyle.css";
import CartProduct from "./CartProduct";
import UsersCartAPI from "../../data/UsersCartAPI";

function ProductList(props) {
    return <div>
        <div className="product-list-header">My cart({props.productsList.length})</div>
        {props.productsList.map(product => {
            return <CartProduct key={product.id} product={product} userId={props.userId}/>
        })}
        <div className="place-order-bar" style={{display: (props.productsList.length === 0) ? "none" : "block"}}>
            <Link to="/order-confirm">
                <button className="order-btn" onClick={() => {
                    if(UsersCartAPI.getAddress(props.userId) === "" || UsersCartAPI.getAddress(props.userId) === undefined) {
                        alert("You have not entered your address. Your order is confirmed for now. Our shipping team will get in touch with you to record your shipping details.")
                    }
                    UsersCartAPI.placeOrderForUser(props.userId)
/*                    let data = {
                        "key":[
                            {"id":1,"state":67}
                        ]
                        }
                    fetch("http://localhost:8000/profile", {
                        method: "POST",
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body: JSON.stringify(data)
                    })*/
                }}>PLACE ORDER</button>
            </Link>
        </div>
    </div>
}

export default ProductList;
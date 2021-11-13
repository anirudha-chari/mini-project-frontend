import { useState } from 'react';
import { AddToCartBtn } from './Buttons';
import '../styles/product.css'

export const Product = (props) => {    
    const [quantity, setQuantity] = useState(1)
    const [btndisabled, setBtndisabled] = useState(true)
    return (
        <main className="product-pane row">
            <div className="col-4 img-container">
            <img src={props.logo} alt={props.name} className="img-fluid" />
            </div>
            <div className="col-7 product-info">
                <h2 className="product-name"> {props.name}</h2>
                <Rating />
                <h3>price: <span className="price-tag">₹{props.price}</span></h3>
                <p className="product-description">{props.desc}</p>
                <div>
                    <button onClick={
                        () => {
                            if (quantity === 2) {
                                // props.className += "disabled";
                                setBtndisabled(true)
                            }
                            setQuantity(quantity - 1)
                        }
                    }
                        className="btn btn-outline-secondary" disabled={btndisabled}
                    >-</button>
                    <span>   {quantity}   </span>
                    <button onClick={() => {
                        setQuantity(quantity + 1)
                        setBtndisabled(false)
                    }
                    } className="btn btn-outline-secondary">+</button>
                </div>
                <AddToCartBtn/>
            </div>
        </main>
    );
}

function Rating(props) {
    return (
        <p>5.0 ⭐⭐⭐⭐⭐</p>
    );
}
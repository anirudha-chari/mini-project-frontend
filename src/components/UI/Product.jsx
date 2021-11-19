import { useEffect, useState } from 'react';
import { AddToCartBtn } from './Buttons';
// import Chart from 'chart.js/auto';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import UsersCartAPI from "../../data/UsersCartAPI";

import '../../styles/product.css'
import cart from '../../data/cartContents';

export const Product = ({ product, loading }) => {
    const [quantity, setQuantity] = useState(1)
    const [btndisabled, setBtndisabled] = useState(true)

    let user = getAuth().currentUser
    if(user){
        user = getAuth().currentUser.email.split('@')[0]
    } else {
        user = ''
    }

    return (
        <>
            <div className="col-4 img-container">
                <img src={"http://139.59.12.232:8082/imgs/"+product.image} alt={product.title} className="img-thumbnail" />
            </div>

            <div className="col-7 product-info">
                <h2 className="product-name"> {product.title}</h2>
                <h3>price: <span className="price-tag">₹{product.price}</span></h3>
                <p className="product-description">{product.description}</p>
                <span className={(product.stock > 0) ? "badge bg-success" : "badge bg-danger"} >{`${product.stock} left in stock`}</span>
                <Rating rating={product.rating} />
                <div>
                    <button onClick={
                        () => {
                            if (quantity === 2) {
                                setBtndisabled(true)
                            }
                            setQuantity(quantity - 1)
                        }
                    }
                        className="btn btn-outline-secondary" disabled={btndisabled}
                    >-</button>
                    <span>   {quantity}   </span>
                    <button onClick={
                        () => {
                            setQuantity(quantity + 1)
                            setBtndisabled(false)
                        }
                    } className="btn btn-outline-secondary">+</button>
                </div>
                <AddToCartBtn handleClick={() => UsersCartAPI.addToUserCart(user, product.id, quantity)} />
            </div>
        </>
    );
}

const Rating = props => {
    const [data, setData] = useState([{}])
    
    useEffect(()=>{
        let d =[]
        let n = Object.keys(props.rating)
        let v = Object.values(props.rating)
        for (let i = 0; i < 5; i++) {
            d.push({ name: n[i], val: v[i] })
        }
        setData(d)
    }, [props.rating])
    
    return (
        <>
            <h5 className="text-muted">Ratings</h5>
            <ResponsiveContainer width="100%" height="40%">
                <BarChart width={80} height={30} data={data} layout="vertical"
                    margin={{
                        top: 5,
                        right: 0,
                        left: 0,
                        bottom: 5,
                    }}
                    barGap={0}
                >
                    <YAxis dataKey="name" type="category" scale="band" tickLine={false} />
                    <XAxis type="number" tickLine={false} axisLine={false} />
                    <Bar dataKey="val" fill={"#87cefa"} >
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}
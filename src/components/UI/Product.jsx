import { useEffect, useState } from 'react';
import { AddToCartBtn } from './Buttons';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

import '../../styles/product.css'
import { IMAGE_URL } from '../../constants/URL';

export const Product = ({ product }) => {
    const [quantity, setQuantity] = useState(1)
    const [btndisabled, setBtndisabled] = useState(true)

    return (
        <>
            <div className="col-4 img-container">
                <img src={IMAGE_URL+product.product_photo} alt={product.title} className="img-thumbnail" />
            </div>

            <div className="col-7 product-info">
                <h2 className="product-name"> {product.name}</h2>
                <h3>price: <span className="price-tag" style={{fontFamily:"monospace"}}>₹{product.price}</span></h3>
                <p className="product-description">{product.description}</p>
                <span className={(product.stock > 0) ? "badge bg-success" : "badge bg-danger"} >{`${product.stock} left in stock`}</span>
                <Rating rating={product.ratings} />
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
                <AddToCartBtn productId={product.id} quantity={quantity}/>
            </div>
        </>
    );
}

const Rating = props => {
    const [data, setData] = useState([{}])

    useEffect(() => {
        let d = []
        let n = ["5 stars", "4 stars", "3 stars", "2 stars", "1 stars"]
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
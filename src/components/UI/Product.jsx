import {useEffect, useRef, useState } from 'react';
import { AddToCartBtn } from './Buttons';
import Chart from 'chart.js/auto';
import '../styles/product.css'

export const Product = (props) => {
    const [quantity, setQuantity] = useState(1)
    const [btndisabled, setBtndisabled] = useState(true)
    return (
        <main className="product-pane row">
            <div className="col-4 img-container">
                <img src={props.logo} alt={props.name} className="img-thumbnail" />
            </div>
            <div className="col-7 product-info">
                <h2 className="product-name"> {props.name}</h2>
                <h3>price: <span className="price-tag">₹{props.price}</span></h3>
                <p className="product-description">{props.desc}</p>
                <Rating rating={[1, 2, 3, 4, 5]} />
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
                <AddToCartBtn />

            </div>
        </main>
    );
}

const Rating = props => {
    let ctx = useRef(null)
    // const [ref, setRef] = useState(null)
    // console.log(props.rating)
    useEffect(() => {
        let chart
        const data = {
            labels: ["5 ⭐", "4 ⭐", "3 ⭐", "2 ⭐", "1 ⭐"],
            datasets: [{
                data: props.rating,
                fill: true,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: 'rgb(255, 99, 132)',
            },]
        };
        // </block:setup>

        // <block:config:0>
        const config = {
            type: 'bar',
            data: data,
            options: {
                indexAxis: 'y',
                elements: {
                    line: {
                        borderWidth: 3
                    }
                },
                scales: {
                    x: { grid: { display: false } },
                    y: { grid: { display: false } },
                    title: {
                        display: false
                    }
                },
                plugins: {
                    legend: { display: false }
                }
            },
        };
        chart = new Chart(ctx.current, config);
    }, [])
    return (
        <div>
            <h5 className="text-muted">Ratings</h5>
            <canvas id="myChart" ref={ctx} />
        </div>
    );
}
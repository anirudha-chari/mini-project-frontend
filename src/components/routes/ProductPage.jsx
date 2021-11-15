import { Product } from '../UI/Product'
import { ProductCard } from '../UI/Card'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/URL';
import '../styles/product.css'

export const ProductPage = props => {
    const params = useParams()

    const [product, setProduct] = useState(null)
    useEffect(() => fetch(BASE_URL + `/products/${params.id}`)
        .then(res => res.json())
        .then(json => setProduct(json)), [params.id])

    const [products, setProducts] = useState(null)
    useEffect(() => fetch(BASE_URL + `/products/${"category/" + (product && product.category)}`)
        .then(res => res.json())
        .then(json => setProducts(json)), [product])

    return (
        <div>
            {product && <Product logo={product.image} name={product.title} price={product.price} desc={product.description} />}
            <aside className="sidebar">
                <h3 className="text-muted" style={{ padding: "10px" }}>Similar products</h3>
                {products && products.map(item => {
                    return item && <ProductCard logo={item.image} id={item.id} key={item.id} title={item.title} price={item.price} />
                })}
            </aside>
        </div>
    )
}
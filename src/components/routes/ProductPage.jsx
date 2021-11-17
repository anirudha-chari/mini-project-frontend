import { Product } from '../UI/Product'
import { ProductCard } from '../UI/Card'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/URL';

export const ProductPage = props => {
    const params = useParams()
    const [loading, setLoading] = useState(true)

    const [product, setProduct] = useState(null)
    useEffect(() => fetch(BASE_URL + `/products/${params.id}`)
        .then(res => res.json())
        .then(json => setProduct(json))
        .then(()=>setLoading(false)), [params.id])

    const [products, setProducts] = useState(null)
    useEffect(() => fetch(BASE_URL + `/products/${"categories/" + (product && product.category)}`)
        .then(res => res.json())
        .then(json => setProducts(json)), [product])

    return (
        <div>
            <main className="product-pane row">
                {product && <Product product={product} loading={loading} />}
            </main>

            <aside className="sidebar">
                <h3 className="text-muted" style={{ padding: "10px" }}>Similar products</h3>
                {products && products.map(item => {
                    return item && <ProductCard product={item} key={item.id}/>
                })}
            </aside>
        </div>
    )
}
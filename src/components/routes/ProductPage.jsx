import { CardContainer } from '../UI/Card'
import { Product } from '../UI/Product'
import { ProductCard } from '../UI/Card'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';

export const ProductPage = props => {
    const params = useParams()

    const [product, setProduct] = useState(null)
    useEffect(() => fetch(`https://fakestoreapi.com/products/${params.id}`)
    .then(res=>res.json())
    .then(json=>setProduct(json)), [params.id,])

    const [products, setProducts] = useState(null)
    useEffect(() => fetch(`https://fakestoreapi.com/products?limit=20`)
    .then(res=>res.json())
    .then(json=>setProducts(json)), [])

    return (
        <div>
            {product && <Product logo={product.image} name={product.title} price={product.price} desc={product.description}/>}
            <CardContainer title="Similar products">
                {products && products.map(item => {
                    return item && <ProductCard logo={item.image} id={item.id} key={item.id} title={item.title} />
                })}
            </CardContainer>
        </div>
    )
}
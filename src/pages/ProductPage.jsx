import { Product } from '../components/UI/Product'
import { ProductCard } from '../components/UI/Card'
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { BASE_URL } from '../constants/URL';
import axios from 'axios';

export const ProductPage = props => {
    const params = useParams()
    const [product, setProduct] = useState()
    const [products, setProducts] = useState()
    
    useEffect(() => {
        async function getProducts(){
            const prodRes = await axios.get(BASE_URL + `/products/${params.id}`)
            setProduct(prodRes.data)
        }
        
        getProducts()
    }, [params])
    useEffect(() => {
        async function getSimilarProducts(){
            const catRes = await axios.get(BASE_URL + `/products/category/${product.category}`)
            setProducts(catRes.data)
        }
        if(product){
            getSimilarProducts()
        }
    }, [product])

    return (
        <div>
            <main className="product-pane row">
                {product && <Product product={product} />}
            </main>

            <aside className="sidebar">
                <h3 className="text-muted" style={{ padding: "10px" }}>Similar products</h3>
                {products && products.map(item => {
                    return item && <ProductCard product={item} key={item.id} />
                })}
            </aside>
        </div>
    )
}
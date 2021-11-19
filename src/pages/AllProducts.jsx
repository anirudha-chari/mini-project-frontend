import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/URL"
import { ProductCard } from "../components/UI/Card"
import axios from "axios"

export const AllProducts = props => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        axios.get(BASE_URL + '/products/')
            .then(json => setProducts(json.slice(0, 10)))
    }, [])
    return (
        <div className="container-fluid">
            {products && products.map(product => {
                return <ProductCard product={product} key={product.id} />
            })}
        </div>
    )
}
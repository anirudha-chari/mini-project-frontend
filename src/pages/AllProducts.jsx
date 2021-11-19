import { useState, useEffect } from "react"
import { BASE_URL } from "../constants/URL"
import { ProductCard } from "../components/UI/Card"
import axios from "axios"

export const AllProducts = props => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState()

    useEffect(() => {
        axios.get(BASE_URL + '/products/')
            .then(setLoading(true))
            .then(json => setProducts(json.data))
            .then(setLoading(false))
    }, [])
    return (
        <div className="container-fluid">
            {!loading && products && products.map(product => {
                return <ProductCard product={product} key={product.id} />
            })}
        </div>
    )
}
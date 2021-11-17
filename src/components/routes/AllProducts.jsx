import { useState, useEffect } from "react"
import { BASE_URL } from "../../constants/URL"
import { ProductCard } from "../UI/Card"

export const AllProducts = props => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(BASE_URL + '/products')
            .then(res => res.json())
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
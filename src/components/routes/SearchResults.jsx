import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/URL"
import { ProductCard } from "../UI/Card"
import { NoResults } from "../UI/NoResults"

export const Result = props => {
    const [products, setProducts] = useState(null)
    useEffect(() => {
        fetch(BASE_URL+`/products?q=${props.query}`)
        .then(res => res.json())
        .then(json => setProducts(json))
        // .then(console.log(products))
    }, [props.query])
    return (
        <main className="row">
            {(products && products.length && products.map(prod => <ProductCard product={prod} key={prod.id} />)) || <NoResults q={props.query} />}
        </main>
    )
}
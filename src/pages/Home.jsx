import { useState, useEffect } from "react"
import { CardContainer, CategoryCard, ProductCard } from "../components/UI/Card"
import { BASE_URL } from '../constants/URL'
import { Link } from "react-router-dom"
import 'bootstrap'

export const HomePane = props => {
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null)
    useEffect(() => fetch(BASE_URL + '/products/categories')
        .then(res => res.json())
        .then(json => setCategories(json)), [])

    useEffect(() => {
        fetch(BASE_URL + '/products/')
            .then(res => res.json())
            .then(json => setProducts(json.slice(0, 10)))
    }, [])

    return (
        <section className="container-fluid">
            <CardContainer title="Shop by health conditions">
                {categories && categories.map(category => <CategoryCard title={category} key={category} />)}
            </CardContainer>
            <CardContainer title="Best sellers">
                {products && products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}

                <Link to="products" className="btn btn-outline-primary my-2 mx-2 align-self-center"> view all</Link>
            </CardContainer>
        </section>
    )
}
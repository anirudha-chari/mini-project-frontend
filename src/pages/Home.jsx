import { useState, useEffect } from "react"
import { CardContainer, CategoryCard, ProductCard } from "../components/UI/Card"
import { BASE_URL } from '../constants/URL'
import { Link } from "react-router-dom"
import axios from "axios"
import 'bootstrap'

export const HomePane = props => {
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null)
    const [loadingCategories, setLoadingCategories] = useState()
    const [loadingProducts, setLoadingProducts] = useState()
    useEffect(() => fetch(BASE_URL + '/products/categories')
        .then(res => res.json())
        .then(json => setCategories(json)), [])

    useEffect(() => {
        axios.get(BASE_URL + '/products/')
            .then(setLoadingCategories(true))
            .then(json => setProducts(json.data))
            .then(setLoadingCategories(false))

        axios.get(BASE_URL + '/products/categories/')
            .then(setLoadingProducts(true))
            .then(json => setCategories(json.data))
            .then(setLoadingProducts(false))
    }, [])

    return (
        <section className="container-fluid">
            <CardContainer title="Shop by health conditions">
                {!loadingCategories && categories && categories.map(category => <CategoryCard title={category} key={category} />)}
            </CardContainer>
            <CardContainer title="Best sellers">
                {!loadingProducts && products && products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}

                <Link to="products" className="btn btn-outline-primary my-2 mx-2 align-self-center"> view all</Link>
            </CardContainer>
        </section>
    )
}
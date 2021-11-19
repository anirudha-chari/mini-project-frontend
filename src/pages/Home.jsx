import { useState, useEffect } from "react"
import { CardContainer, CategoryCard, ProductCard } from "../components/UI/Card"
import { BASE_URL } from '../constants/URL'
import { Link } from "react-router-dom"
import 'bootstrap'
import axios from "axios"

export const HomePane = props => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [loadingProducts, setLoadingProducts] = useState()
    const [loadingCategories, setLoadingCategories] = useState()

    useEffect(() => {
        axios.get(BASE_URL + '/products/')
        .then(setLoadingProducts(true))
        .then(json => setProducts(json.data))
        .then(setLoadingProducts(false))
        .catch(err => console.log(err))
        
        axios.get(BASE_URL + '/products/categories')
        .then(setLoadingCategories(true))
        .then(json => setCategories(json.data))
        .then(setLoadingCategories(false))
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="container-fluid">
            <CardContainer title="Shop by health conditions">
                {!loadingCategories && categories.length > 0 && categories.map(category => <CategoryCard title={category} key={category} />)}
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
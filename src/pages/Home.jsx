import { useState, useEffect } from "react"
import { CardContainer, CategoryCard, ProductCard } from "../components/UI/Card"
import { BASE_URL } from '../constants/URL'
import { Link } from "react-router-dom"
import 'bootstrap'
import axios from "axios"

export const HomePane = props => {
    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState()
    useEffect(() => axios.get(BASE_URL + '/products/categories')
        .then(setLoading(true))
        .then(json => setCategories(json.data))
        .then(setLoading(false)), [])


    useEffect(() => {
        axios.get(BASE_URL + '/products/')
            .then(setLoading(true))
            .then(json => setProducts(json.data))
            .then(setLoading(false))
    }, [])

    return (
        <section className="container-fluid">
            <CardContainer title="Shop by health conditions">
                {!loading && categories && categories.length >0 && categories.map(category => <CategoryCard title={category} key={category} />)}
            </CardContainer>
            <CardContainer title="Best sellers">
                { !loading && products && products.map(product => {
                    return <ProductCard product={product} key={product.id} />
                })}

                <Link to="products" className="btn btn-outline-primary my-2 mx-2 align-self-center"> view all</Link>
            </CardContainer>
        </section>
    )
}
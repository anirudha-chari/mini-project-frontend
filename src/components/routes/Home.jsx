import { useState, useEffect } from "react"
import { CardContainer, CategoryCard, ProductCard } from "../UI/Card"
import {BASE_URL} from '../../constants/URL'

export const HomePane = props => {
    const [categories, setCategories] = useState(null)
    const [products, setProducts] = useState(null)
    useEffect(() => fetch(BASE_URL+'/products/categories')
    .then(res => res.json())
    .then(json=> setCategories(json)), [])

    useEffect(() => fetch(BASE_URL+'/products?limit=10')
    .then(res=>res.json())
    .then(json=>setProducts(json)), [])

    return (
        <section>
            <CardContainer title="Shop by health conditions">
                {categories && categories.map(category => <CategoryCard title={category} key={category}/>) }
            </CardContainer>
            <CardContainer title="Best sellers">
                { products && products.map(product => {
                    return <ProductCard logo={product.image} title={product.title} id={product.id} key={product.id} price={product.price}/>
                })}
            </CardContainer>
        </section>
    )
}
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/URL"
import { ProductCard } from "../components/UI/Card"
import { NoResults } from "../components/UI/NoResults"
import Pagination from "../components/UI/pagination"
import axios from "axios"

export const Result = props => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 10
    const [products, setProducts] = useState([])
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    useEffect(() => {
        axios.get(BASE_URL + `/products?q=${props.query}`)
            .then(res => res.data)
            .then(json => setProducts(json))
        // .then(console.log(products))
    }, [props.query])

    let currentProducts = products.slice(indexOfFirstPost, indexOfLastPost)
    const paginate = (pagenumber) => { setCurrentPage(pagenumber) }

    return (
        <div className="container-fluid">
            <main className="row">
                {(currentProducts.map(prod => <ProductCard product={prod} key={prod.id} />)) || <NoResults q={props.query} />}
            </main>
            {products.length ? <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} setcurrentpage={setCurrentPage}/> : < NoResults q={null} />}
        </div>
    )
}
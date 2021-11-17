import { useEffect, useState } from "react"
import { BASE_URL } from "../../constants/URL"
import { ProductCard } from "../UI/Card"
import { NoResults } from "../UI/NoResults"
import Pagination from "../UI/pagination"

export const Result = props => {
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5
    const [products, setProducts] = useState([])
    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage

    useEffect(() => {
        fetch(BASE_URL + `/products?q=${props.query}`)
            .then(res => res.json())
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
            {products.length ? <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} /> : < NoResults q={null} />}
        </div>
    )
}
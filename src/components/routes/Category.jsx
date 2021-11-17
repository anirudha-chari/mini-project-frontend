import { ProductCard } from "../UI/Card"
import '../styles/category.css'
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { BASE_URL } from "../../constants/URL"
import Pagination from "../UI/pagination"
import {NoResults} from '../UI/NoResults'

export const CategoryPage = props => {
    const params = useParams()
    const [products, setProducts] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const postsPerPage = 5
    const [filteredProducts, setFilteredProducts] = useState(products)
    // const [sortedProducts, setSortedProducts] = useState(filteredProducts)
    const [filters, setFilters] = useState(
        {
            //filters to be used as query parameters
            excludeOutOfStock: true,
            priceMin: 0,
            priceMax: 5000,
        }
    )

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const [sortOrder, setSortOrder] = useState()
    let currentProducts = filteredProducts.slice(indexOfFirstPost, indexOfLastPost)


    useEffect(() => {
        fetch(BASE_URL + `/products/categories/${params.name}`)
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [params.name])

    useEffect(() => {
        let prods = products.filter(
            prod => {
                let match = true
                match = match && filters.excludeOutOfStock ? (prod.stock > 0) : match
                match = match && filters.priceMax > prod.price
                match = match && filters.priceMin < prod.price
                return match
            }
        )
        setFilteredProducts(prods)
        // console.log(filteredProducts)
    }, [products, filters])

    useEffect(() => {
        let prods
            prods = filteredProducts.sort((a, b) => {
                if (a.price > b.price) {
                    return -1 * sortOrder
                } else if (a.price < b.price) {
                    return 1 * sortOrder
                } else {
                    return 0
                }
            })
        setProducts(prods)
    }, [sortOrder])

    const paginate = (pagenumber) => { setCurrentPage(pagenumber) }

    return (
        <div className="row">
            <aside className="col-2 filters">
                <h5 className="text-muted filter-section">
                    Filters
                </h5>
                <div className="filter-section">
                    <h6 className="text-muted ">Availability</h6>
                    <div className="form-check form-switch">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            role="switch"
                            id="flexSwitchCheckDefault"
                            onChange={() => {
                                setFilters({ ...filters, excludeOutOfStock: !filters.excludeOutOfStock })
                            }}
                            defaultChecked />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Exclude out of stock </label>
                    </div>
                </div>
                <div className="filter-section">
                    <h6 className="text-muted">Price</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault"
                            onChange={() => setFilters({ ...filters, priceMin: 0, priceMax: 5000 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault">
                            All
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                            onChange={() => setFilters({ ...filters, priceMin: 0, priceMax: 100 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                            Under 100
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                            onChange={() => setFilters({ ...filters, priceMin: 100, priceMax: 200 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                            100 - 200
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"
                            onChange={() => setFilters({ ...filters, priceMin: 200, priceMax: 500 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault3">
                            200 - 500
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4"
                            onChange={() => setFilters({ ...filters, priceMin: 500, priceMax: 1000 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault4">
                            500 - 1000
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault5"
                            onChange={() => setFilters({ ...filters, priceMin: 1000, priceMax: 5000 })} />
                        <label className="form-check-label" htmlFor="flexRadioDefault5">
                            1000 - 5000
                        </label>
                    </div>
                </div>
            </aside>
            <div className="col-10 mt-2" >
                {/* <div className="row" style={{ marginTop: "10px" }}> */}
                <p style={{ display: "inline" }}> Sort by - </p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="-1" defaultChecked
                        onChange={(e) => setSortOrder(e.target.value)} />
                    <label className="form-check-label" htmlFor="inlineRadio1">price - low to high</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="1"
                        onChange={(e) => setSortOrder(e.target.value)} />
                    <label className="form-check-label" htmlFor="inlineRadio2">price - high to low</label>
                </div>
                {/* </div> */}
                <main className="row">
                    {currentProducts.map(product => {
                        return <ProductCard product={product} key={product.id} />
                    })}
                </main>
                {filteredProducts.length ? <Pagination postsPerPage={postsPerPage} totalPosts={products.length} paginate={paginate} /> : < NoResults q={null} />}
            </div>
        </div>
    )
}
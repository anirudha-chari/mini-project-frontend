import { ProductCard } from "../UI/Card"
import '../styles/category.css'
import { useParams } from "react-router"
import { useState, useEffect } from "react"
import { BASE_URL } from "../../constants/URL"

export const CategoryPage = props => {
    const params = useParams()
    const [products, setProducts] = useState(null)
    const [filters, setFilters] = useState(
        {
            //filters to be used as query parameters
            excludeOutOfStock: true,
            priceMin: 0,
            priceMax: 5000,
            brands: []
        }
    )
    // useEffect(() => fetch(BASE_URL + `/products/category/${params.name}` + (filters && new URLSearchParams(filters)))
    useEffect(() => fetch(BASE_URL + `/products/category/${params.name}`)
        .then(res => res.json())
        .then(json => setProducts(json)), [params.name])

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
                <div className="filter-section">
                    <h6 className="text-muted">Brand</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="brand1" />
                        <label className="form-check-label" htmlFor="brand1">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="brand2" />
                        <label className="form-check-label" htmlFor="brand2">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="brand3" />
                        <label className="form-check-label" htmlFor="brand3">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="brand4" />
                        <label className="form-check-label" htmlFor="brand4">
                            Brand Name
                        </label>
                    </div>
                </div>
            </aside>
            <div className="col-10 offset-md-2" >
                {/* <div className="row" style={{ marginTop: "10px" }}> */}
                <p style={{ display: "inline" }}> Sort by - </p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked />
                    <label className="form-check-label" htmlFor="inlineRadio1">price - low to high</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                    <label className="form-check-label" htmlFor="inlineRadio2">price - high to low</label>
                </div>
                {/* </div> */}
                <main className="row">
                    {products && products.map(product => {
                        return <ProductCard logo={product.image} id={product.id} key={product.id} title={product.title} />
                    })}
                </main>
            </div>
        </div>
    )
}
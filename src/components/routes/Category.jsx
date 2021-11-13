import { ProductCard } from "../UI/Card"
import '../styles/category.css'
import { useParams } from "react-router"
import { useState, useEffect } from "react"

export const CategoryPage = props => {
    const params = useParams()
    const [products, setProducts] = useState(null)
    useEffect(() => fetch(`https://fakestoreapi.com/products/category/${params.name}`)
    .then(res=>res.json())
    .then(json=>setProducts(json)), [params.name])

    return (
        <div className="row">
            <aside className="col-2 filters">
                <h5 className="text-muted filter-section">
                    Filters
                </h5>
                <div className="filter-section">
                    <h6 className="text-muted ">Availability</h6>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" defaultChecked/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Exclude out of stock</label>
                    </div>
                </div>
                <div className="filter-section">
                    <h6 className="text-muted">Price</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheck100" />
                        <label className="form-check-label" htmlFor="flexCheck100">Under 100</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheck200" />
                        <label className="form-check-label" htmlFor="flexCheck200">100 - 200</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheck500" />
                        <label className="form-check-label" htmlFor="flexCheck500">200 - 500</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheck1000" />
                        <label className="form-check-label" htmlFor="flexCheck1000">500 - 1000</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheck5000" />
                        <label className="form-check-label" htmlFor="flexCheck5000">1000 - 5000</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckAbove5000" />
                        <label className="form-check-label" htmlFor="flexCheckAbove5000">Above 5000</label>
                    </div>
                </div>
                <div className="filter-section">
                    <h6 className="text-muted">Brand</h6>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand Name
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Brand Name
                        </label>
                    </div>
                </div>
            </aside>
            <div className="col-10 offset-md-2" >
                {/* <div className="row" style={{ marginTop: "10px" }}> */}
                    <p style={{display: "inline"}}> Sort by - </p>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" defaultChecked/>
                        <label className ="form-check-label" htmlFor="inlineRadio1">price - low to high</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                        <label className ="form-check-label" htmlFor="inlineRadio2">price - high to low</label>
                    </div>
                {/* </div> */}
                <main className="row">
                    {products && products.map(product => {
                        return  <ProductCard logo={product.image} id={product.id} key={product.id} title={product.title}/>
                    })}
                </main>
            </div>
        </div>
    )
}
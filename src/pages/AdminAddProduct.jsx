import React, { Component } from 'react'
import AdminSidebar from "../components/UI/AdminSidebar";
import ProductService from "../ProductService"
export class AdminAddProduct extends Component {

    constructor(props){
        super(props)
        this.state={
            name:"",
            category:"",
            price:"",
            stock:"",
            description:"",
            image:""
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeCategoryHandler = this.changeCategoryHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.changeStockHandler = this.changeStockHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
    }

    saveProduct = (e) => {
        e.preventDefault();
        let product1 = {name: this.state.name, category: this.state.category, price: this.state.price,stock:this.state.stock,description:this.state.description};
        var string_product = JSON.stringify(product1);
        const formData = new FormData();
        formData.append("product",string_product);
        formData.append("file",this.state.image);
        ProductService.postProduct(formData).then((res) => {
            console.log(res)
        })
    }

    changeNameHandler = (e) => {
        this.setState({name : e.target.value});
    }
    changeCategoryHandler = (e) => {
        this.setState({category : e.target.value});
    }
    changePriceHandler = (e) => {
        this.setState({price : e.target.value});
    }
    changeStockHandler = (e) => {
        this.setState({stock : e.target.value});
    }
    changeDescriptionHandler = (e) => {
        this.setState({description : e.target.value});
    }
    changeImageHandler= (e) =>{
        this.setState({image:e.target.files[0]})
    }
    render() {
        return (
            <div>
                 <AdminSidebar />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3>Add Product</h3>
                            <div className="card-body">
                                <form >
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input placeholder="Product Name" name="name" className="form-control"
                                        value={this.state.name} onChange={this.changeNameHandler} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Category</label>
                                        {/* <input placeholder="Category" name="category" className="form-control"
                                        value={this.state.category} onChange={this.changeCategoryHandler}/>
                             */}
                                   <select className="form-select" aria-label="category" defaultValue={null}  value={this.state.category} id="category" onChange={this.changeCategoryHandler} required>
                                       <option value="1">One</option>
                                       <option value="2">Two</option>
                                       <option value="3">Three</option>
                                       <option value="3">Four</option>
                                       <option value="3">Five</option>
                                    </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Price</label>
                                        <input type="number"  placeholder="Price" name="price" className="form-control"
                                        value={this.state.price} onChange={this.changePriceHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Stock</label>
                                        <input type="number" placeholder="Stock" name="stock" className="form-control"
                                        value={this.state.stock} onChange={this.changeStockHandler} required/>
                                    </div>
                                    <div className="form-group">
                                        <label>Description</label>
                                        <input placeholder="Product Description" name="description" className="form-control"
                                        value={this.state.description} onChange={this.changeDescriptionHandler}/>
                                        <br/>
                                    </div>
                                    <div>
                                    <input type="file" onChange={this.changeImageHandler}/>
                                    </div>
                                    <br/>
                                    <button  className="btn btn-success" onClick={this.saveProduct}>Add Product</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            
                
            </div>
        )
    }
}

export default AdminAddProduct

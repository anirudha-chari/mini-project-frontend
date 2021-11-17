import React, { useEffect, useState } from "react";
import AdminSidebar from "./AdminSidebar";
import "../styles/adminpage.css"
import "../styles/adminaddproduct.css";
import 'bootstrap'

function AdminAddProduct() {
    var formData = new FormData()
    const url = "https://6194599f9b1e780017ca1f28.mockapi.io/addproduct"
    let rs, paise

    const handleTitleChange = e => {
        formData.append("name", e.target.value)
        console.log(e.target.value)
    }
    const handleCategoryChange = e => {
        formData.append("category", e.target.value)
        console.log(e.target.value)
    }
    const handleStockChange = e => {
        formData.append("stock", e.target.value)
        console.log(e.target.value)
    }
    const handleDescChange = e => {
        formData.append("description", e.target.value)
        console.log(e.target.value)
    }
    const handleFileChange = e => {
        formData.append("image", e.target.files[0])
        console.log(e.target.value)
    }
    const handlePriceRsChange = e => {
        rs = e.target.value
        console.log(e.target.value)
    }
    const handlePricePaiseChange = e => {
        paise = e.target.value
        console.log(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        const price = Number(rs+ '.' +paise)
        console.log(price)
        formData.append('price', price)

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div className="container row mt-2" >
            <AdminSidebar />
            <div className="col-7 container">
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" onChange={(e) => handleTitleChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="scategory" className="form-label">Category</label>
                        <select className="form-select" aria-label="category" defaultValue={null} id="category" onChange={(e) => handleCategoryChange(e)}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows="3" onChange={(e) => handleDescChange(e)}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Image</label>
                        <input className="form-control" type="file" id="formFile" onChange={(e) => handleFileChange(e)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input type="number" className="form-control" id="stock" onChange={(e) => handleStockChange(e)} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Rs</span>
                        <input type="number" className="form-control" aria-label="Price" onChange={e => handlePriceRsChange(e)} /> <span className="input-group-text">.</span>
                        <input type="number" className="form-control" onChange={e => handlePricePaiseChange(e)}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AdminAddProduct

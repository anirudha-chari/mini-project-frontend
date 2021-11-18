import React, { useRef, useState } from "react";
import AdminSidebar from "../components/UI/AdminSidebar";
import "../styles/adminpage.css"
import "../styles/adminaddproduct.css";
import 'bootstrap'

function AdminAddProduct() {
    const url = "https://6194599f9b1e780017ca1f28.mockapi.io/addproduct"
    const titleRef = useRef()
    const categoryRef = useRef()
    const stockRef = useRef()
    const descriptionRef = useRef()
    const fileRef = useRef()
    const priceRef = useRef()
    const [error, setError] = useState()

    var formData = new FormData()

    function handleSubmit(e) {
        e.preventDefault();
        formData.append('name', titleRef.current.value)
        formData.append('category', categoryRef.current.value)
        formData.append('stock', stockRef.current.value)
        formData.append('description', descriptionRef.current.value)
        formData.append('product_photo', fileRef.current.value)
        formData.append('price', priceRef.current.value)

        for (const iterator of formData.entries()) {
            console.log(iterator)
        }

        fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            body: formData
        })
            .then(res => {
                !(res.statusText === 'ok') && setError('something went wrong')
                return res
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
                {error && <div className="alert alert-danger" role="alert">{error}</div>}
                <form onSubmit={e => handleSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" id="title" aria-describedby="emailHelp" ref={titleRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="category" className="form-label">Category</label>
                        <select className="form-select" aria-label="category" defaultValue={null} id="category" ref={categoryRef}>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <textarea className="form-control" id="description" rows="3" ref={descriptionRef}></textarea>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="formFile" className="form-label">Upload Image</label>
                        <input className="form-control" type="file" id="formFile" ref={fileRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="stock" className="form-label">Stock</label>
                        <input type="number" className="form-control" id="stock" ref={stockRef} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text">Rs</span>
                        <input type="text" className="form-control" aria-label="Price" ref={priceRef} />
                        {/* <input type="number" className="form-control" ref={pricePaiseRef} /> */}
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AdminAddProduct

import React from 'react'
import "../../styles/adminpage.css"
import 'bootstrap'
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <aside className="col-2 mx-2">
      <div className="mt-5">
        <div className="sidebarMenu justify-items-center">
          <h3 className="text-muted mb-5">Dashboard</h3>
          <div className="btn-group-vertical w-100">
            <Link to="/admin" className="btn btn-primary" aria-current="page">Home</Link>
            <Link to="/adminviewproducts" className="btn btn-primary ">Products</Link>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default AdminSidebar

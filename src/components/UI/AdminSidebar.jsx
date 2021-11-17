import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
// import "./Sidebar.css"
import "../styles/adminpage.css"
import { Link } from "react-router-dom";

function AdminSidebar() {
    return (
     

<div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList"></ul>
              
                  <li className="sidebarListItem">
                     <Link to ="/admin">
                    <LineStyleIcon/> Home
                    </Link>
                  </li>
                  {/* <li className="sidebarListItem">
                    <Link to='/adminviewusers'> <LineStyleIcon/> Users
                    </Link>
                    
                  </li> */}
                  <li className="sidebarListItem">
                   <Link to='/adminviewproducts'> <LineStyleIcon/> Products
                   </Link>
                   
                  </li>
              
                
            </div>
         
        </div>
    </div>

            
     
    )
}

export default AdminSidebar

import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import AdminSidebar from './AdminSidebar';
// import "./Sidebar.css"
import "../styles/adminpage.css"
import { Link } from "react-router-dom";
import {salesData} from "../../dummyData";
import Chart from './Chart'; 

function AdminPage() {
    return (

     <div className="container2">
       <AdminSidebar/>

        {/* <div className="sidebar">
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarList"></ul>
              
                  <li className="sidebarListItem">
                     <Link to ="/admin">
                    <LineStyleIcon/> Home
                    </Link>
                  </li>
                  <li className="sidebarListItem">
                    <Link to='/admin/users'> <LineStyleIcon/> Users
                    </Link>
                    
                  </li>
                  <li className="sidebarListItem">
                   <Link to='/adminviewproducts'> <LineStyleIcon/> Products
                   </Link>
                   
                  </li>
              
                
            </div>
         
        </div>
    </div> */}

    <div className="main">
            <Chart data={salesData} title="Sales Analytics" grid dataKey="sales"/>
        </div>
   
</div>
    )
}

export default AdminPage

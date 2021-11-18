import React from 'react'
import AdminSidebar from '../components/UI/AdminSidebar';
import "../styles/adminpage.css"
import Chart from '../components/UI/Chart'; 

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
            {/* <Chart data={salesData} title="Sales Analytics" grid dataKey="sales"/> */}
            <Chart  title="Sales Analytics" grid dataKey="sales"/>
        </div>
   
</div>
    )
}

export default AdminPage

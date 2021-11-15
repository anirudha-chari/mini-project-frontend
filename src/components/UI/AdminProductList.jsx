import React from 'react'
import "../styles/adminproductlist.css"
// import "../styles/userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {productRows} from "../../dummyData.js";
import {useState} from "react";
import { width } from '@mui/system';
import { Link } from "react-router-dom"; 
import AdminSidebar from './AdminSidebar';

function ProductList() {

    const[data,setData]= useState(productRows)

    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id!==id));
        
      }

      const columns = [
        { field: 'id', headerName: 'Product ID', width: 150 },
        { field: 'productName', headerName: 'Product Name', width: 180 },
        { field: 'stock', headerName: 'Stock', width: 160 },
        { field:'price', headerName:'Price',width:150},
        {field:'action', headerName:'Action', width:150,
           renderCell:(params)=>{
             return(
               <>
               <Link to={"/editproduct/"+params.row.id}>
                   <button className="productListEdit">Edit</button>
               </Link>
          
              <DeleteOutlineIcon className="userListDelete" 
                onClick={()=>handleDelete(params.row.id)}
              />
            </>
             )
           }
        },
        //   valueGetter: (params) =>
        //     `${params.getValue(params.id, 'firstName') || ''} ${
        //       params.getValue(params.id, 'lastName') || ''
        //     }`,
        // },
      ];
    return (
      <div className="container2">
        <AdminSidebar/>
        <div className="productlist">
            <DataGrid
             disableSelectionOnClick
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
        </div>
        </div>
    )
}

export default ProductList

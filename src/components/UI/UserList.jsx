import React, { useState } from 'react';
// import "./userlist.css"
import "../styles/userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {userRows} from "../../dummyData.js";
import AdminSidebar from './AdminSidebar';

export default function UserList() {

    const handleDelete =(id)=>{
      setData(data.filter((item)=>item.id!==id));
      
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 140 },
        { field: 'userName', headerName: 'Username', width: 160 },
        { field:'action', headerName:'Action',width:150,
           renderCell:(params)=>{
             return(
               <>
              {/* <button className="userListEdit">Edit</button> */}
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
      
      // const rows = [
      //   { id: 1, name: 'ABC', userName: 'XYZ' },
      //   { id: 2, name: 'ABC', userName: 'XYZ' },
      //   { id: 3, name: 'ABC', userName: 'XYZ' },
      //   { id: 4, name: 'ABC', userName: 'XYZ' },
      //   { id: 5, name: 'ABC', userName: 'XYZ' },
      //   { id: 6, name: 'ABC', userName: 'XYZ' },  
      //   { id: 7, name: 'ABC', userName: 'XYZ' },
      //   { id: 8, name: 'ABC', userName: 'XYZ' },
      // ];
      
   const[data,setData]=useState({userRows})
    return (
        
        <div className="container2">
          <AdminSidebar/>
        <div className="userList">
             <DataGrid
             disableSelectionOnClick
        rows={userRows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
        </div>
        </div>

    )
}

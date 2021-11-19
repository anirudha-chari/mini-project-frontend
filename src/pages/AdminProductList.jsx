import {React} from 'react'
import "../styles/adminproductlist.css"
// import "../styles/userlist.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {useState,useEffect} from "react";
import { Link } from "react-router-dom"; 
// import AdminSidebar from '../components/UI/AdminSidebar';
// import { AuthProvider } from '../context/AuthContext';
import { getAuth,onAuthStateChanged } from '@firebase/auth';
import axios from 'axios';

function ProductList() {

    const[data,setData]= useState([]);

    // const getData = async()=>{
    //   const response = await fetch('https://fakestoreapi.com/products');
    //   setData(await response.json());
      
    // }
    const getData= async()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          auth.currentUser.getIdToken(true).then((idtoken) => {
            console.log(idtoken);
            console.log("idtoken");
            const api = " http://139.59.12.232:8082/admin/products/";
            axios.get(api).then((res)=>setData(res.data))
 
          });
        } else {
          console.log("logged out");
        }
      });
      // axios.get('https://fakestoreapi.com/products').then((res)=>setData(res.data))
     
    }      
    //   setData(await response.json());
   
    useEffect(()=>{
      getData();
    },[]);

    const handleDelete =(id)=>{
        setData(data.filter((item)=>item.id!==id));
        
      }

      const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'Image', headerName: 'image', width: 150 },
        { field: 'title', headerName: 'Title', width: 120 },
        { field: 'description', headerName: 'description', width: 150 },
        { field:'price', headerName:'Price',width:120},
        {field:'category', headerName:'category', width:130},
        {field:'stock', headerName:'stock', width:130},
        {field:'action', headerName:'Action', width:140,
           renderCell:(params)=>{
             return(
               <>
               {/* <Link to={"/editproduct/"+params.row.id}> */}
               <Link to={"/admineditproduct"}>
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
        {/* <AdminSidebar/> */}
        
        <div className="productlist">
          <Link to={"/adminaddproduct"}>
          <button className="addproduct" >Add New Product</button>
          </Link>
          
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

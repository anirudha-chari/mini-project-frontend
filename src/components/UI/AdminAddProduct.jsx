import { Grid, makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import React, {useEffect,useState}from "react";
import AdminSidebar from "./AdminSidebar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import "../styles/adminpage.css"
// import React from 'react'
import "../styles/adminaddproduct.css";
// import { Axios } from "axios";
import axios from "axios";
const useStyle = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            // margin:theme.spacing(1)
            margin:theme.spacing(1)
        }

    }
}))
// const intialValues ={
//     title:'',
//     category:'',
//     description:'',
//     price:'',
//     image:'',
//     stock:''
// }
function AdminAddProduct() {

    const intialValues ={
        title:'',
        category:'',
        description:'',
        price:'',
        image:'',
        stock:''
    }
    const url = "https://6194599f9b1e780017ca1f28.mockapi.io/addproduct"
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    const[values,setValues] =useState(intialValues);
     const classes = useStyle();
 
     const handleInputChange =e=>{
      const {name,value} = e.target
      setValues({
          [name]:value
      })
     }


     function submit(e){
         e.preventDefault();
         axios.post(url,{
            title:values.title,
            description:values.description,
            price:values.price,
            stock:values.stock
           // image:values.image,
            //category:values.category
            })
            .then(res=>{
                console.log(res.values)
            })
     }
     function handle(e){
         const newdata={...values}
         newdata[e.target.id]=e.target.value
         setValues(newdata)
         console.log(newdata)
     }
    return (
        <div className="container2" >
              <AdminSidebar/>

              <div className="main">


              <form action="" className={classes.root} onSubmit={(e)=>submit(e)}>
              {/* <form action="" className="formfields"> */}
               <Grid container>
               <Grid item xs={6}>
                <TextField
                id="title"
                variant="outlined"
                label="Title"
                value={values.title}
                name="Title"
                onChange = {(e)=>handle(e)}
                InputLabelProps={{
                    shrink: true,
                    }}
                />
                <TextField
                id="description"
                variant="outlined"
                label="Description"
                value={values.description}
                name="Description"
                onChange = {(e)=>handle(e)}
                InputLabelProps={{
                    shrink: true,
                    }}
                />
            </Grid>
            <Grid item xs={6}>
            <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={age}
          onChange={handleChange}
          autoWidth
          label="Age"
        >
          {/* <MenuItem value="">
            <em>None</em>
          </MenuItem> */}
          <MenuItem value={10}>Twenty</MenuItem>
          <MenuItem value={21}>Twenty one</MenuItem>
          <MenuItem value={22}>Twenty one and a half</MenuItem>
        </Select>
       </Grid>
            <Grid item xs={6}>
        
            {/* <input
               
                 id="upload-photo"
                 name="upload-photo"
                 type="file"
             /> */}
            <TextField
                id="image"
                variant="outlined"
                label="Upload Photo"
                name="upload-photo" 
                type="file" 
                value={values.image}
                onChange = {(e)=>handle(e)}
                InputLabelProps={{
                    shrink: true,
                    }}
                />
            <TextField
                id="stock"
                variant="outlined"
                label="Stock"
                type="number"
                value={values.stock}
                onChange = {(e)=>handle(e)}
                InputLabelProps={{
                     shrink: true,
                     }}
                 />
             <TextField
                id="price"
                label="Price"
                type="number"
                value={values.price}
                onChange = {(e)=>handle(e)}
                InputLabelProps={{
                     shrink: true,
                     }}
                 />
            </Grid>
            <Grid item xs={12}>
            <Button variant="contained" type="submit">Submit</Button>
            
            </Grid>
        </Grid>

       </form>
       </div>
       </div>
    )
}

export default AdminAddProduct

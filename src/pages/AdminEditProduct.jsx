// import React from 'react';
import { Grid, makeStyles } from "@material-ui/core";
import { TextField } from "@mui/material";
import React, {useState}from "react";
import AdminSidebar from "../components/UI/AdminSidebar";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import "../styles/adminpage.css"
// import React from 'react'
import "../styles/adminaddproduct.css";

const useStyle = makeStyles(theme=>({
    root:{
        '& .MuiFormControl-root':{
            width:'80%',
            // margin:theme.spacing(1)
            margin:theme.spacing(1)
        }

    }
}))

const intialValues ={
    title:'',
    category:'',
    description:'',
    price:'',
    image:'',
    stock:''
}

function AdminEditProduct() {
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
    return (
        <div className="container2" >
              <AdminSidebar/>

              <div className="main">


              <form action="" className={classes.root}>
              {/* <form action="" className="formfields"> */}
               <Grid container>
               <Grid item xs={6}>
                <TextField
                variant="outlined"
                label="Title"
                value={values.title}
                name="Title"
                onChange = {handleInputChange}
                />
                <TextField
                variant="outlined"
                label="Description"
                value={values.title}
                name="Description"
                onChange = {handleInputChange}
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
                name="upload-photo" 
                type="file" 
                />
            <TextField
                id="outlined-number"
                label="Stock"
                type="number"
                InputLabelProps={{
                     shrink: true,
                     }}
                 />
             <TextField
                id="outlined-number"
                label="Price"
                type="number"
                InputLabelProps={{
                     shrink: true,
                     }}
                 />
            </Grid>
            <Grid iemx xs={12}>
            <Button variant="contained"  type="submit">Submit</Button>
            
            </Grid>
        </Grid>

       </form>
       </div>
       </div>
    )
}

export default AdminEditProduct

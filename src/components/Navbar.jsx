
import React,{useState}from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { NavLink } from "react-router-dom";
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { FaAmbulance } from "react-icons/fa";


function Navbar() {

    const [dropdown, setDropdown] = useState(false);

    return (
        <>
        <nav className="navbar">
            <Link to="/" className="navbar-logo">
                MEDICO
                <FaAmbulance/>
            </Link>

            <input type="text" placeholder="Search..."></input>
            <ul className="nav-items">
               {navItems.map(item=>{

if (item.title === "Health Concerns") {
    return (
      <li
        key={item.id}
        className={item.cName}
         onMouseEnter={() => setDropdown(true)}
         onMouseLeave={() => setDropdown(false)}
      >
        <Link to={item.path}>{item.title}</Link>
        {dropdown && <Dropdown />}
        {/* <Dropdown/> */}
     </li>
    );
  }


                   return(
                    <li key={item.id} className={item.cName}>
                    <Link to={item.path}>{item.title}</Link>
                    </li>
                   );
                  })} 
            </ul>
            <Link to="/mycart">
          <ShoppingCartIcon color="primary" fontSize="medium" className="icon1"/>
          </Link>
           <Link to="/mycart">
          <AccountCircleIcon color="primary" fontSize="medium"/>
          </Link>
        </nav>
      
        </>
    )
}

export default Navbar

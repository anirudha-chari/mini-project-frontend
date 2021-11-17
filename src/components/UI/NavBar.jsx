import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/Nav.css'
import { navItems } from "./NavItems";
import Dropdown from "./Dropdown";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { FaAmbulance } from "react-icons/fa";


export function Navbar(props) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <nav className="navbar">
      <div className="nav-left">

        <Link to="/" className="navbar-logo">
          MEDICO
          <FaAmbulance />
        </Link>

        <form className="d-flex nav-search" onSubmit={props.handleSubmit}>
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
          onChange={e => props.setQuery(e.target.value)}/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
      </div>
      <div className="nav-right">

        <ul className="nav-items">
          {navItems.map(item => {

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

         


            return (
              <li key={item.id} className={item.cName}>
                {/* <Link to={item.path}>{item.title}</Link> */}
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
        <Link to="/mycart" className="nav-items">
          <ShoppingCartIcon color="primary" fontSize="medium" className="icon1" />
        </Link>
        <Link to="/profile" className="nav-items">
          <AccountCircleIcon color="primary" fontSize="medium" />
        </Link>
      </div>
    </nav>
  )
}

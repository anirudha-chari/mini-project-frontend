import React from "react";
import { Link } from "react-router-dom";
import { FaAmbulance } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import 'bootstrap'
import { getAuth } from "@firebase/auth";


export function Navbar(props) {

    const { isAdmin, isLoggedin, setIsLoggedin, logOut } = useAuth()
    function handleSubmit() {
        logOut()
        setIsLoggedin(false)
    }

    let user = getAuth().currentUser
    if(user){
        user = getAuth().currentUser.email.split('@')[0]
    } else {
        user = ''
    }
    // console.log(user);


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >
                    MEDICO
                    < FaAmbulance alt="" width="30" height="24" className="d-inline-block align-text-center" />
                </Link>
                <button className="navbar-toggler mb-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" onSubmit={props.handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => props.setQuery(e.target.value)} />
                        <button className="btn btn-outline-light me-2" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Categories
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark me-2" aria-labelledby="navbarDropdown">
                                <li><Link to="/category/Health_monitoring_Devices" className="dropdown-item" >Health Monitoring Devices</Link></li>
                                <li><Link to="/category/Ayurveda" className="dropdown-item" >Ayurveda</Link></li>
                                <li><Link to="/category/Personal_care" className="dropdown-item" >Personal care</Link></li>
                                <li><Link to="/category/Health_Nutrition" className="dropdown-item" >Health andNutrition</Link></li>
                                <li><Link to="/category/Home_Essentials" className="dropdown-item" >Home Essentials</Link></li>
                                <li><Link to="/category/Baby_Care" className="dropdown-item" >Baby Care</Link></li>
                            </ul>
                        </li>
                    </ul>
                    {!isLoggedin &&
                        <Link to="/login" className="d-flex mb-2" >
                            <button className="btn btn-primary" type="submit">Login</button>
                        </Link>
                    }


                    {isLoggedin && <div className="dropdown mb-2">
                        <button className="btn btn-secondary dropdown-toggle me-2" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Hello
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="/" onClick={() => { handleSubmit() }}>Log out</Link></li>
                            <li><Link className="dropdown-item" to={`/user/${user}/cart`}>Cart</Link></li>
                            {/* <li><Link class="dropdown-item" >Something else here</Link></li> */}
                        </ul>
                    </div>
                    }
                    {
                        isAdmin && isLoggedin && <Link to="/adminviewproducts" className="d-flex mb-2" >
                            <button className="btn btn-primary" type="button">Manage</button>
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

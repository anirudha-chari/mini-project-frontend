import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaAmbulance } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";
import 'bootstrap'


export function Navbar(props) {

    const { isAdmin, isLoggedin, setIsLoggedin, logOut, currentUser } = useAuth()
    function handleSubmit(e) {
        e.preventDefault()
        logOut()
        setIsLoggedin(false)
    }


    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/" >
                    MEDICO
                    < FaAmbulance alt="" width="30" height="24" className="d-inline-block align-text-center" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <form className="d-flex" onSubmit={props.handleSubmit}>
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            onChange={e => props.setQuery(e.target.value)} />
                        <button className="btn btn-outline-light me-2" type="submit">Search</button>
                    </form>
                    <ul className="navbar-nav ms-auto me-2 mb-2 mb-lg-0">
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Health Concerns
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link to="" className="dropdown-item" href="#">Action</Link></li>
                                <li><Link to="" className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="" className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Personal Care
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link to="" className="dropdown-item" href="#">Action</Link></li>
                                <li><Link to="" className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="" className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Health and Nutrition
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link to="" className="dropdown-item" href="#">Action</Link></li>
                                <li><Link to="" className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="" className="dropdown-item" href="#">Something else here</Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Covid Care
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdown">
                                <li><Link to="" className="dropdown-item" href="#">Action</Link></li>
                                <li><Link to="" className="dropdown-item" href="#">Another action</Link></li>
                                <li><hr className="dropdown-divider" /></li>
                                <li><Link to="" className="dropdown-item" href="#">Something else here</Link></li>
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
                            <li><Link className="dropdown-item" to="/" onClick={()=> {handleSubmit()}}>Log out</Link></li>
                            <li><Link className="dropdown-item" to="/admin">Cart</Link></li>
                            {/* <li><Link class="dropdown-item" href="#">Something else here</Link></li> */}
                        </ul>
                    </div>
                    }
                    {
                        isAdmin && isLoggedin && <Link to="/admin" className="d-flex mb-2" >
                            <button className="btn btn-primary" type="button">Manage</button>
                        </Link>
                    }
                </div>
            </div>
        </nav>
    )
}

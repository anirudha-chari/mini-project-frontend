import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'

export const Navbar = props => {
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-light" style={{backgroundColor: '#e3f2fd'}}>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/home">Big Pharma</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link" to="/healthconcerns">Health Concerns</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/personalcare">Personal Care</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/nutrition">Nutrition</Link>
                            </li>
                        </ul>
                    </div>
                        <form class="d-flex">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button class ="btn btn-outline-primary" type ="submit">Search</button>
                        </form>
                </div>
            </nav>
        </header>
    )
}
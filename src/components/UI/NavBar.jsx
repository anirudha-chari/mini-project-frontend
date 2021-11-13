import { Link } from "react-router-dom"

export const Navbar = props => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Big Pharma</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/healthconcerns">Health Concerns</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/personalcare">Personal Care</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/nutrition">Nutrition</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                {/* <div className="container-fluid"> */}
                    <Link to="/profile"><button className="btn btn-primary">profile</button></Link>
                {/* </div> */}
            </nav>
        </header>
    )
}
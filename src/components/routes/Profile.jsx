import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileicon from '../../images/profileicon.png'

export const Profile = props => {
    const [user, setuser] = useState(null)
    useEffect(() => fetch('https://fakestoreapi.com/users/1')
        .then(res => res.json())
        .then(json => setuser(json))
        .catch(), [])
    return (
        <div className="container">
            <div className="row">
                <div className="col-9 container">
                    <div className="row">
                        <div className="col-3 sections" style={{ boxShadow: "0 0 5px rgba(128, 128, 128, 0.3)", margin: "10px" }}>
                            <img src={profileicon} alt="profile" className="img-fluid rounded mx-auto d-block" />
                        </div>
                            <h3>
                                <small className="text-muted">hello, </small>
                                {user && user.name.firstname}
                            </h3>
                    </div>
                    <div className="personal-info row">
                        <form className="col-8">
                            <fieldset disabled>
                                <legend>Personal Information</legend>
                                <div className="mb-3">
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user && user.name.firstname} />
                                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user && user.name.lastname} />
                                    </div>
                                </div>
                            </fieldset>
                            <fieldset disabled>
                                <legend>Account Details</legend>
                                <div className="mb-3">
                                    <label htmlFor="disabledTextInput" className="form-label">Username</label>
                                    <input type="text" id="disabledTextInput" className="form-control" placeholder={user && user.username} />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder={user && user.email} />
                                </div>
                            </fieldset>
                            <Link to="editProfile"><button type="button" className="btn btn-light">Edit</button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
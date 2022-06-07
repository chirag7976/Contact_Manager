import React from "react";
import { Link, useLocation } from "react-router-dom";
import img from "../images/user.png"


const UserDetails = (props) => {

    const location = useLocation();
    const user = location.state

    return (
        <>
            <div className="card text-center container my-5">
                <div className="card-header">
                    Contact Details
                </div>
                <div className="card-body d-flex justify-content-evenly align-items-center ">
                    <img src={img} alt="" height="150px" width="150px" />
                    <div>
                        <h5 className="card-title">{user.name}</h5>
                        <p className="card-text"><i className="bi bi-envelope-heart text-danger"></i> {user.email}</p>
                        <p className="card-text"><i className="bi bi-telephone text-danger"></i> {user.phone}</p>
                    </div>
                </div>
                <div className="card-footer text-muted">
                </div>
            </div>
            <div className="text-center container">
                <Link to={
                    {
                        pathname: `/edit/${user.id}`
                    }
                } state={{
                    name: user.name,
                    email: user.email,
                    phone: user.phone,
                    id: user.id
                }}>
                    <button className="btn btn-warning m-3">Edit</button>
                </Link>
                <Link to="/">
                    <button className="btn btn-primary m-3">back</button>
                </Link>
            </div>

        </>
    );

}
export default UserDetails;
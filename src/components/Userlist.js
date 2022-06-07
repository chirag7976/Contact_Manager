import React from "react";
import { Link } from "react-router-dom";

const Userlist = (props) => {
    return (
        <>
            <div className="card container my-2">
                <div className="card-body d-flex justify-content-between align-items-center ">
                    <Link to={
                        {
                            pathname: `/user/${props.id}`
                        }
                    } state={{
                        name: props.name,
                        email: props.email,
                        phone: props.phone,
                        id: props.id
                    }}>
                        <h5 className="card-title">{props.name}</h5>
                        <p className="card-text"><i className="bi bi-envelope-heart text-danger"></i> {props.email}</p>
                        <p className="card-text"> <i className="bi bi-telephone text-danger"></i> {props.phone}</p>
                    </Link>
                    <i className="bi bi-trash3 text-danger" onClick={() => props.clickHandler(props.id)}></i>
                </div>
            </div>
        </>
    );
}
export default Userlist 
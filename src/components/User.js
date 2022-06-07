import React from "react";
import { Link } from "react-router-dom";
import Userlist from "./Userlist";
const User = (props) => {
    
    const deleteUser=(id)=>{
        props.getUser(id)
    };


    return (
        <>
        <div className="text-center my-3">
        <Link to="/add">
        <button className="btn btn-primary " >Add User</button>
        </Link>
        </div>
            { props.users.map((user,e) => 
                <Userlist
                    key={e}
                    id={user.id}
                    name={user.name}
                    email={user.email}
                    phone={user.phone}
                    clickHandler={deleteUser}
                />
            )}
        </>);
        
    // return (
    //     <>
    //         {props.users.map((user) => (
    //             <div className="card container my-2">
    //                     <div className="card-body  d-flex justify-content-between">
    //                         <h5 className="card-title">{user.name}</h5>
    //                         <p className="card-text">{user.email}</p>
    //                         <a href="/" className="btn btn-primary">Delete <i className="bi bi-trash3 text-danger"></i></a>
    //                 </div>
    //             </div>
    //         ))}
    //     </>
    // );
}
export default User;
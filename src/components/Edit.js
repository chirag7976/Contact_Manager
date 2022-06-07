import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const Edit = () => {

    const location = useLocation();
    const user = location.state

    const LOCAL_STORAGE_KEY = "users";
    const userList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    const [users, setUsers] = useState(userList)
    const [name, setName] = useState(user.name)
    const [email, setEmail] = useState(user.email)
    const [phone, setPhone] = useState(user.phone)

    const update = (e) => {
        e.preventDefault();

        if (e.target.username.value === "" || e.target.email.value === "" || e.target.phone.value === "") {
            alert("Fill all the Fields");
        }
        else {
            const LOCAL_STORAGE_KEY = "users";
            const getUsers = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
            localStorage.removeItem(LOCAL_STORAGE_KEY);

            for (let i = 0; i < getUsers.length; i++) {
                for (const u in getUsers[i]) {
                    if (u === 'id' && getUsers[i][u] === user.id) {
                        getUsers[i]["name"] = name;
                        getUsers[i]["email"] = email;
                        getUsers[i]["phone"] = phone;
                        console.log('getUser', getUsers[i]);
                    }
                }
            }
            const newList = getUsers;
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newList));
            window.location.href="/"
        }
    }
    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const emailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const phoneChangeHandler = (event) => {
        setPhone(event.target.value)
    }
    return (
        <>
            <div className="container my-2">
                <form onSubmit={update}>
                    <div className="mb-3">
                        <label className="form-label">User name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            value={name}
                            onChange={nameChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={email}
                            onChange={emailChangeHandler}
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Phone</label>
                        <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={phone}
                            onChange={phoneChangeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Update</button>
                </form>
            </div>

        </>
    );
}
export default Edit;
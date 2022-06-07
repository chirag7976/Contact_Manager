import React, { useState } from "react";

const Userform = (props) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const add = (e) => {
        e.preventDefault();
        if (e.target.username.value === "" || e.target.email.value === "" || e.target.email.value === "") {
            alert("Fill all the Fields");
        }
        else {
            const user = {
                id: Math.random().toString(),
                name: name,
                email: email,
                phone: phone
            };

            props.addUserHandler(user)
            setName("");
            setEmail("");
            setPhone("");
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
                <form onSubmit={add}>
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
                            name="phome"
                            value={phone}
                            onChange={phoneChangeHandler}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    );
}
export default Userform;
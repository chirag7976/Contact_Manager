import React from "react";
import { Link } from "react-router-dom";

const About = () => {

    return (
        <>
            <div class="card container my-5">
                <h5 class="card-header">About</h5>
                <div class="card-body">
                    <h5 class="card-title">Contact Manager App</h5>
                    <p class="card-text">CMA (Contact Manager App) is created Using React JS</p>
                    <Link to={"/"}>
                    <button class="btn btn-primary">Home</button>
                    </Link>
                </div>
            </div>
        </>
    );

}
export default About;
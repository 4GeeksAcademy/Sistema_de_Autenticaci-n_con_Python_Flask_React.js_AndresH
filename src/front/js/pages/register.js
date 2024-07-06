import React from "react";
import { Link } from "react-router-dom";

export const Register = () => {
	
	return (
         <div className="container py-3 mt-5 rounded fw-bolder bg-light">
                <h1 className="text-center h2">REGISTRATE</h1>
                <form className="p-5">
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                <Link className="btn btn-warning border" to={'/'}>Go to home</Link>
        </div>
	);
};
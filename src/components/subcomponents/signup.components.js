import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
    render() {
        return (
            <form action="/register" method="POST" >
                <h3>Register</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="name" name="name" className="form-control" placeholder="First name" required/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" id="email" name="email" className="form-control" placeholder="Enter email" required />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" name="password"  className="form-control" placeholder="Enter password" required/>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    Already registered <Link className="nav-link" to={"/login"}>log in?</Link>
                </p>
            </form>
        );
    }
}
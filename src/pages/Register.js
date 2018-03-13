import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "../assets/images/bevlogo.png";

export default class Register extends Component {

  render(){
    return (

        <form className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src={logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign Up</h1>
          </div>

          <div className="form-label-group">
            <input type="text" id="firstName" className="form-control" placeholder="First name" required autofocus/>
            <label htmlFor="firstName">First name</label>
          </div>

          <div className="form-label-group">
            <input type="text" id="lastname" className="form-control" placeholder="Last Name" required autofocus/>
            <label htmlFor="lastname">Last Name</label>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <label htmlFor="inputPassword">Password</label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          <p className="login-navigate"><a href="/login">Already have an account? Login here</a></p>
          <p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"/></a></p>

        </form>

    )
  }
}

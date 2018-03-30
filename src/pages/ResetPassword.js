import React, {Component} from 'react';
import logo from "../assets/images/bevlogo.png";

export default class ResetPassword extends Component {

  render(){
    return (
        <form className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src={logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Password Reset</h1>
          </div>

          <div className="form-label-group">
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
            <label htmlFor="inputEmail">Email address</label>
          </div>


          <button className="btn btn-lg btn-primary btn-block" type="submit">Send Request</button>

          <p className="login-navigate"><a href="/register">New User? Register</a></p>
          <p className="login-navigate password"><a href="/login">Login</a></p>
          <p className="login-navigate password"><a href="/">Mainpage</a></p>

        </form>

    )
  }
}

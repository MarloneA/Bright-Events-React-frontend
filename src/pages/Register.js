import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Register extends Component {

  render(){
    return (

        <form class="form-signin">
          <div class="text-center mb-4">
            <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal" id="ghostwhite">Sign Up</h1>
          </div>

          <div class="form-label-group">
            <input type="text" id="firstName" class="form-control" placeholder="First name" required autofocus/>
            <label for="firstName">First name</label>
          </div>

          <div class="form-label-group">
            <input type="text" id="lastname" class="form-control" placeholder="Last Name" required autofocus/>
            <label for="lastname">Last Name</label>
          </div>

          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus/>
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required/>
            <label for="inputPassword">Password</label>
          </div>

          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          <p class="login-navigate"><a href="/login">Already have an account? Login here</a></p>

        </form>

    )
  }
}

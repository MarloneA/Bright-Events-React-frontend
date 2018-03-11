import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Register from './Register';
import ResetPassword from './ResetPassword';

export default class Login extends Component {

  render(){
    return (
        <form class="form-signin">
          <div class="text-center mb-4">
            <img class="mb-4" src="https://getbootstrap.com/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"/>
            <h1 class="h3 mb-3 font-weight-normal" id="ghostwhite">Please Sign In</h1>
          </div>

          <div class="form-label-group">
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autoFocus/>
            <label for="inputEmail">Email address</label>
          </div>

          <div class="form-label-group">
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required autoFocus/>
            <label for="inputPassword">Password</label>
          </div>

          <div class="checkbox mb-3" id="ghostwhite">
            <label>
              <input type="checkbox" value="remember-me"/> Remember me
            </label>
          </div>
          <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

          <p class="login-navigate"><a href="/register">New User? Register</a></p>
          <p class="login-navigate password"><a href="/reset-password">Forgot password?</a></p>

        </form>

    )
  }
}

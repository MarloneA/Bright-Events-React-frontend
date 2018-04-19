import React, {Component} from 'react'
import logo from '../assets/images/bevlogo.png'

export default class Login extends Component {
  render () {
    return (
      <form className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src={logo} alt="bev logo" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign In</h1>
        </div>

        <div className="form-label-group">
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required autoFocus/>
          <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3" id="ghostwhite">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>

        <p className="login-navigate"><a href="/register">New User? Register</a></p>
        <p className="login-navigate password"><a href="/reset-password">Forgot password?</a></p>
        <p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"></span></a></p>

      </form>

    )
  }
}

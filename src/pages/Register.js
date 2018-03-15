import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { notify } from 'react-notify-toast';
import axios from 'axios';

import logo from "../assets/images/bevlogo.png";

export default class Register extends Component {

  constructor(){
    super();
    this.state = {
      firstName:"",
      lastName:"",
      email:"",
      password:""
    }
  }

  handleInputChange = (event) => {
    const {name, value} = event.target;
    this.setState({[name]:value});
  }

  handleRegister = (event) => {
    const {firstName, lastName, email, password} = this.state;
    event.preventDefault();

    axios.post("http://localhost:5000/api/v2/auth/register",{firstName, lastName, email, password})
    .then(response => {
      notify.show(response.data.message, 'success', 4000);
      this.props.history.push('/login');
    })
    .catch(error => {
      if (error.response){
        notify.show(error.response.data.message, 'error', 4000);
      }
      else if (error.request) {
        notify.show("Request not made", 'error', 4000);
      }
    });

  }

  render(){
    const {firstName, lastName, email, password} = this.state;

    return (

        <form onSubmit={this.handleRegister} className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src={logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign Up</h1>
          </div>

          <div className="form-label-group">
            <input onChange={this.handleInputChange} name='firstName' value={firstName} type="text" id="firstName" className="form-control" placeholder="First name" required autofocus/>
            <label htmlFor="firstName">First name</label>
          </div>

          <div className="form-label-group">
            <input onChange={this.handleInputChange} name='lastName' value={lastName} type="text" id="lastname" className="form-control" placeholder="Last Name" required autofocus/>
            <label htmlFor="lastname">Last Name</label>
          </div>

          <div className="form-label-group">
            <input onChange={this.handleInputChange} name='email' value={email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus/>
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input onChange={this.handleInputChange} name="password" value={password} type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <label htmlFor="inputPassword">Password</label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up</button>
          <p className="login-navigate"><a href="/login">Already have an account? Login here</a></p>
          <p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"/></a></p>

        </form>

    )
  }
}

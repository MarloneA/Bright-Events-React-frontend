import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Notifications, { notify } from 'react-notify-toast';
import axios from 'axios';
import {connect} from "react-redux"
import logo from "../assets/images/bevlogo.png";
import { networkRequest,registerUser } from '../actions/authentication.actions';
import "./../../src/assets/css/loader.css"
 class Register extends Component {

  constructor(props){
    super(props);
    this.handleRegister = this.handleRegister.bind(this)
  }


  handleRegister(e){
    e.preventDefault();
    const {dispatch} = this.props;
    const {firstname,lastname,email,password} = this.refs;

    const userData = {
      firstName:firstname.value,
      lastName:lastname.value,
      email:email.value,
      password:password.value
    }
    console.log("the data is ", userData)
    dispatch(registerUser(userData))  
  }


  render(){
  const {loading} = this.props;

  if(loading){
  return (
    <div className="ui segment">
    <div className="ui active dimmer">
      <div className="ui text loader">Signing UP .......</div>
    </div>
  </div>
  )
}
 

    return (
        <form onSubmit={this.handleRegister} className="form-signin">
          <div className="text-center mb-4">
            <img className="mb-4" src={logo} alt="" width="72" height="72"/>
            <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign Up</h1>
          </div>

          <div className="form-label-group">
            <input ref='firstname'  name='firstName'  type="text" id="firstName" className="form-control" placeholder="First name" required />
            <label htmlFor="firstName">First name</label>
          </div>

          <div className="form-label-group">
            <input ref='lastname'  name='lastName'  type="text" id="lastname" className="form-control" placeholder="Last Name" required />
            <label htmlFor="lastname">Last Name</label>
          </div>

          <div className="form-label-group">
            <input ref='email'  name='email'  type="email" id="inputEmail" className="form-control" placeholder="Email address" required />
            <label htmlFor="inputEmail">Email address</label>
          </div>

          <div className="form-label-group">
            <input ref='password'  name="password"  type="password" id="inputPassword" className="form-control" placeholder="Password" required/>
            <label htmlFor="inputPassword">Password</label>
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up </button>

          <span hidden={!loading}>Dude, You are now safe .......</span>
          <p className="login-navigate"><a href="/login">Already have an account? Login here</a></p>
          <p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"/></a></p>

        </form>

    )
  }
}

const mapStateToProps = state=> ({
  loading:state.loading
})


export default connect(mapStateToProps)(Register) 

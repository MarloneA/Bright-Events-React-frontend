import React, { Component } from 'react'
import { connect } from 'react-redux'
import logo from '../assets/images/bevlogo.png'
import './../../src/assets/css/loader.css'
import { userActions } from '../actions'

class Register extends Component {
  constructor (props) {
    super(props)

    this.state = {
      user: {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
      },
      submitted: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    const { name, value } = e.target
    const { user } = this.state

    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
  }

  handleSubmit (e) {
    e.preventDefault()

    const { user } = this.state
    const { dispatch } = this.props

    if (user.firstName && user.lastName && user.email && user.password) {
      dispatch(userActions.register(user))
    }
  }

  render () {
    const { registering } = this.props
    const { user, submitted } = this.state

    return (
      <form onSubmit={this.handleSubmit} className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src={logo} alt="" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign Up</h1>
        </div>

        <div className="form-label-group">
          <input name='firstName' value={user.firstName} type="text" id="firstName" className="form-control" placeholder="First name" onChange={this.handleChange} required />
          <label htmlFor="firstName">First name</label>
        </div>

        <div className="form-label-group">
          <input name='lastName' value={user.lastName} type="text" id="lastname" className="form-control" placeholder="Last Name" onChange={this.handleChange} required />
          <label htmlFor="lastname">Last Name</label>
        </div>

        <div className="form-label-group">
          <input name='email' value={user.email} type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleChange} required />
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input name='password' value={user.password} type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handleChange} required/>
          <label htmlFor="inputPassword">Password</label>
        </div>

        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign up </button>
        { registering }
        <p className="login-navigate"><a href="/login">Already have an account? Login here</a></p>
        {/*<p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"/></a></p>*/}

      </form>

    )
  }
}

function mapStateToProps (state) {
  const { registering } = state.registration
  return {
    registering
  }
}

const connectedRegisterpage = connect(mapStateToProps)(Register);
export { connectedRegisterpage as Register };

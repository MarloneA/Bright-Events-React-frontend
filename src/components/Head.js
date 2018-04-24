import React, {Component} from 'react'
import {userActions} from '../actions'
import { history } from "../helpers";

export default class Head extends Component {
  constructor (props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    localStorage.removeItem('user')
    history.push('/login')
  }

  render () {
    return (

      <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light my-custom-nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active pad" href="/">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link pad" href="/">Browse Events</a>
            <a className="nav-item nav-link pad" href="/create-event">Create Events</a>
            <a className="nav-item nav-link pad" href="/">My Events</a>
            <a className="nav-item nav-link pad" href="/login">Sign In</a>
            <a className="nav-item nav-link pad" href="/register">Register</a>

          </div>
          <input onClick={this.handleClick} type="button" value="Logout" className="nav-item nav-link pad cs-logout"/>
        </div>

      </nav>
    )
  }
}

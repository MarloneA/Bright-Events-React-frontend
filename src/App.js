import React, {Component} from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import Login from './pages/Login'
import { Register } from './pages/Register'
import ResetPassword from './pages/ResetPassword'
import NewEvent from './pages/NewEvent'

import './assets/css/styles.css'

export default class App extends Component {
  render () {
    return (
      <Router>
        <div className="custom-pg-background">
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/reset-password" component={ResetPassword}/>
          <Route path="/create-event" component={NewEvent}/>
        </div>
      </Router>
    )
  };
}

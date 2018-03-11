import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ResetPassword from './pages/ResetPassword';

import "./pages/css/styles.css";

export default class App extends Component{
  render(){

    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/reset-password" component={ResetPassword}/>
        </div>
      </Router>
    )
  };
}
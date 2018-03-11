import React, {Component} from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Head extends Component {
  render() {
    return (

    <nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light my-custom-nav">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active pad" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link pad" href="/">Browse Events</a>
            <a className="nav-item nav-link pad" href="#">Create Events</a>
            <a className="nav-item nav-link pad" href="#">My Events</a>
            <a className="nav-item nav-link pad" href="/login">Sign In</a>
            <a className="nav-item nav-link pad" href="/register">Sign Out</a>
          </div>
        </div>

      </nav>
    );
  }
}

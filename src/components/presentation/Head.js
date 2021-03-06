import React, {Component} from "react"
import Logout from "./Logout"
import {Link} from "react-router-dom"
import Search from "./Search"

export default class Head extends Component {
	render () {
		return (

			<nav className="fixed-top navbar navbar-expand-lg navbar-light bg-light my-custom-nav">
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<Link className="nav-item nav-link active pad" to="/">Home <span className="sr-only">(current)</span></Link>
						<Link className="nav-item nav-link pad" to="/events">Browse Events</Link>
						<Link className="nav-item nav-link pad" to="/manage-events">Manage Events</Link>
						<Link className="nav-item nav-link pad" to="/create-event">Create Event</Link>
					</div>
					<Search/>
					<Logout/>
				</div>

			</nav>
		)
	}
}

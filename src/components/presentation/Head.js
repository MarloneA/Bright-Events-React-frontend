import React, {Component} from "react"
import Logout from "./Logout"

export default class Head extends Component {
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
						<a className="nav-item nav-link pad" href="/manage-events">Manage Events</a>
					</div>
					<div id="content">
						<button type="button" id="sidebarCollapse" className=" cs-util">
							<span className="glyphicon glyphicon-tasks menu icon"></span>
						</button>
					</div>
					<Logout/>
				</div>

			</nav>
		)
	}
}

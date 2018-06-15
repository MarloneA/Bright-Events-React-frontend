import React, {Component} from "react"
import { Link } from "react-router-dom"
import Head from "../presentation/Head";

class LandingPage extends Component {
	render() {
		return (
			<div>
				<Head/>
				<div className="wrapper">
					<div className="cs-text-overlay" >
						{/*<div className="header" >*/}
						{/*<h2 id="css-logo" >Bright EVents</h2>*/}
						{/*</div>*/}

						<div className="css-main-content" >
							<h1 id="css-main-header" >Bright Events</h1>
							<h3 id="css-sub-heading" >If you can dream it, you can live it</h3>

							<Link className="nav-item nav-link pad cs-start css-start" to="/events">Browse Events</Link>
							<Link className="nav-item nav-link pad cs-start" to="/create-event">Create Event</Link>

						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default LandingPage

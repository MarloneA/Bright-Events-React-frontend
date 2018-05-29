import React, {Component} from "react"
import Head from "../components/Head"
import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom"
import Rsvp from "../components/Rsvp";


class SearchPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: []
		}
		// this.populateData = this.populateData.bind(this)
	}
	render() {
		const content = this.state.data.map(
			event => (
				<div className="event" key={event.id}>
					<Link to={"/events/" + event.id}>
						<div className="event-img">
							<p>Upload image ...</p>
						</div>
						<div className="event-content">
							<h4 className="custom-event-styling">{event.title}</h4>
							<h6 className="custom-event-styling">{"Date of Event: " + event.date_of_event}</h6>
							<p className="custom-event-styling-par">{event.description}</p>
							<h6 className="custom-event-styling cs-dcon">{"Created on: " + event.created_on}</h6>
							<Rsvp/>
						</div>
					</Link>
				</div>
			)
		)
		return (
			<div>
				<Head/>
				<Sidebar/>
				<div id="custom-main-content">
					{content}
					<div className="line"></div>
				</div>

			</div>
		)
	}
}

export default SearchPage
// triggerParentUpdate={this.populateData}
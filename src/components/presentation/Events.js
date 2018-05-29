import React, {Component} from "react"
import { Link } from "react-router-dom"
import Rsvp from "./Rsvp"

export default class Events extends Component {
	render () {
		const {events, loading} = this.props
		const content = events.map(
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
			<div id="custom-main-content">
				{loading}
				{content}
				<div className="line"></div>
			</div>
		)
	}
}

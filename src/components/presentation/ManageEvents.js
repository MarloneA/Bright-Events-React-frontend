import React, {Component} from "react"
import { Link } from "react-router-dom"

class ManageMyEvents extends Component {

	render () {
		const { events } = this.props
		const content = events.map(
			event => (
				<div className="event" key={event.id}>
					<Link to={"/edit-events/" + event.id} className="custom-btn edit btn btn-sm" >Edit</Link>
					<div className="event-img">
						<p>Upload image ...</p>
					</div>
					<div className="event-content">
						<h4 className="custom-event-styling">{event.title}</h4>
						<h6 className="custom-event-styling">{"Date of Event: " + event.date_of_event}</h6>
						<p className="custom-event-styling-par">{event.description}</p>
						<h6 className="custom-event-styling cs-dcon">{"Created on: " + event.created_on}</h6>
					</div>
				</div>
			)
		)
		return (
			<div id="custom-main-content">
				{content}
				<div className="line"></div>
			</div>
		)
	}
}

export default ManageMyEvents

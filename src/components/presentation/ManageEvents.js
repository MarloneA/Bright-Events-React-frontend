import React, {Component} from "react"
import { Link } from "react-router-dom"
import DeletePopup from "./DeletePopup"

class ManageMyEvents extends Component {

    onDelete = (id) => {
        this.props.onDelete(id)
    }

	render () {
		const { events } = this.props

        console.log(events)
		const content = events.map(
			event => (
				<div className="cs-card" key={event.id}>

					<DeletePopup onDelete={this.onDelete} id={event.id}/>
					<Link to={`/edit-events/${event.id}`} className="custom-btn edit btn btn-sm" >Edit</Link>

					<div className="row">
						<div className="col-md-3">
							<div className="cs-cnt-img">

							</div>
						</div>
						<div className="cs-cnt-content col-md-9">
							<h4>{event.title}</h4>
							<p>{event.description.slice(0,200)+" ..."}</p>
							<h6>{`Category: ${event.category}`}</h6>
							<h6>{`Location: ${event.location}`}</h6>
							<h6>{"Date: " + event.date_of_event}</h6>
							<h6 className="cs-guest cs-rsvd"><Link to={`/api/v2/event/${event.id}/rsvp`}>View guest List</Link></h6>
						</div>
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

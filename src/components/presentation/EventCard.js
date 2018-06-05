import React from "react"
import { Link } from "react-router-dom"
import Rsvp from "./Rsvp"

export const content = function(items){
	return items.map(
		event => (
			<div className="cs-card" key={event.id}>
				<Link className="row" to={"/events/" + event.id}>
					<div className="col-md-3">
						<div className="cs-cnt-img">
							<p>Image here ...</p>
						</div>
					</div>
					<div className="cs-cnt-content col-md-9">
						<h4>{event.title}</h4>
						<p>{event.description.slice(0,200)+" ..."}</p>
						<h6>{`Category: ${event.category}`}</h6>
						<h6>{`Location: ${event.location}`}</h6>
						<h6>{"Date: " + event.date_of_event}</h6>
						<Rsvp className="cs-rsvd" id={event.id} />
					</div>
				</Link>
			</div>
		)
	)
}
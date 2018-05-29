import React, { Component } from "react"
import { dispatch } from "redux"
// import { createEvent } from "../../actions/index"
import { connect } from "react-redux"

export class CreateEvent extends Component {
	constructor (props) {
		super(props)
		this.state = {
			event: {
				title: "",
				category: "",
				location: "",
				description: "",
				date: ""
			}

		}
		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange (e) {
		this.setState({
			event: {
				...this.state.event,
				[e.target.name]: e.target.value
			}
		})
	}
	onSubmit (e) {
		e.preventDefault()
		const { event } = this.state
		// console.log("befor props")
		if (event.title && event.category && event.location && event.description && event.date) {
			console.log("submit called", event)
			this.props.createEvent(event)
		}

	}

	render () {
		let { event } = this.state
		return (
			<form className="form-horizontal custom-create-events" onSubmit={this.onSubmit}>
				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="title">Title:</label>
					<div className="col-sm-10">
						<input type="text" name="title" value={event.title} onChange={this.onChange} className="form-control custom-create-event-input" id="title" placeholder="Enter Title"/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="date">Date:</label>
					<div className="col-sm-10">
						<input type="date" name="date" value={event.date} onChange={this.onChange} className="form-control custom-create-event-input" id="date" placeholder="Enter event date"/>
					</div>
				</div>
				<div className="form-group">
					<label htmlFor="category" className="control-label custom-ce-label">Category:</label>
					<select name="category" value={event.category} onChange={this.onChange} className="form-control category-styling custom-ce-label">
						<option>...</option>
						<option>Workshops</option>
						<option>Science & Tech</option>
						<option>Networking</option>
						<option>Seminar</option>
					</select>
				</div>
				<div className="form-group">
					<label htmlFor="location" className="control-label custom-ce-label">Location:</label>
					<select name="location" value={event.location} onChange={this.onChange} className="form-control location-styling custom-ce-label">
						<option>...</option>
						<option>Nairobi</option>
						<option>Mombasa</option>
						<option>Nakuru</option>
						<option>Kisumu</option>
					</select>
				</div>

				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="email">Description:</label>
					<textarea
						name="description"
						value={event.description}
						onChange={this.onChange}
						className="col-sm-10 custom-create-event-textarea"
						rows="10"/>
				</div>

				<div className="form-group">
					<div className="col-sm-offset-2 col-sm-10">
						<button type="submit" className="btn btn-default custom-btn">Create Event</button>
					</div>
				</div>
			</form>
		)
	}
}


import React, { Component } from "react"

export default class CreateEvent extends Component {
	constructor (props) {
		super(props)
		this.state = {
			event: {
				title: "",
				category: "",
				location: "",
				description: "",
				date_of_event: ""
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
		this.props.onCreate(event)
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
						<input type="date" name="date_of_event" value={event.date_of_event} onChange={this.onChange} className="form-control custom-create-event-input" id="date" placeholder="Enter event date"/>
					</div>
				</div>
				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="category">Category:</label>
					<div className="col-sm-10">
						<input type="text" name="category" value={event.category} onChange={this.onChange} className="form-control custom-create-event-input" id="category" placeholder="Enter category"/>
					</div>
				</div>

				<div className="form-group">
					<label className="control-label col-sm-2" htmlFor="location">Location:</label>
					<div className="col-sm-10">
						<input type="text" name="location" value={event.location} onChange={this.onChange} className="form-control custom-create-event-input" id="location" placeholder="Enter location"/>
					</div>
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


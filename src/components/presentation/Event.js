import React, {Component} from "react"
import Head from "./Head"

class Event extends Component {
	constructor (props) {
		super(props)
		this.state = {
			event: {}
		}
	}
	componentWillMount () {
		let id = this.props.match.params.id
		fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`).then(
			res => {
				return res.json()
			}
		).then(
			data => {
				this.setState({event: data.event})
			}
		)
	}
	render () {
		const { title, location, category, description, date_of_event, created_by } = this.state.event
		return (
			<div>
				<Head/>
				<main role="main" id="cs-main">
					<div className="container cs-evnt-card">

						<div className="row cs-img-desc">
							<div className="col-md-8 cs-img">
								<p>Upload image ...</p>
							</div>
							<div className="col-md-4 cs-detail">
								<p>Event on: { date_of_event}</p>
								<b>{title}</b>
								<p>Contact organizer at: {created_by}</p>
							</div>
						</div>

						<div className="row cs-desc">
							<div className="col-md-8 cs-desc-detail">
								<h3>DESCRIPTION</h3>
								<p>{ description }</p>
							</div>

							<div className="col-md-4 cs-desc-date">
								<h4>Date</h4>
								<p>{ date_of_event }</p>
								<h4>Category</h4>
								<p>{ category }</p>
								<h4>Location</h4>
								<p>{ location }</p>
								{/*<a href="https://www.google.com/maps/place/Thika+Road+Mall/@-1.2164517,36.8837127,15z/data=!4m5!3m4!1s0x0:0x2c30e07746ac972a!8m2!3d-1.2195003!4d36.8881872">View on map</a>*/}
							</div>

						</div>

						{/*<div className="row">*/}
							{/*<div className="col-md-12 map">*/}
								{/*<iframe*/}
									{/*title="maps"*/}
									{/*src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15955.652906733938!2d36.88421685!3d-1.2204388999999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1524730462634"*/}
									{/*width="101%" height="390" frameBorder="0" allowFullScreen>*/}
								{/*</iframe>*/}
							{/*</div>*/}
						{/*</div>*/}
					</div>
					{/*<p className="login-navigate cs-nav-home"><a href="/"> Go back to the Mainpage <span className="arrow-right icon"/></a></p>*/}
				</main>
			</div>
		)
	}
}

export default Event

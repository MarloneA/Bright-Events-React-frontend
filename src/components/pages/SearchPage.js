import React, {Component} from "react"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"
import { Link } from "react-router-dom"
import Rsvp from "../presentation/Rsvp"


class SearchPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
		    dataFromChild: []
		}

		this.handleDataFromChild = this.handleDataFromChild.bind(this)
	}
	handleDataFromChild(){
		this.setState({
			dataFromChild: this.props.sData
		})
	}

	render() {
		console.log(this.props)
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
				<Sidebar onSearch={(query)=>this.props.searchEvent(query)} content/>
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
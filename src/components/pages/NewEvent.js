import React, {Component} from "react"
import Head from "../presentation/Head"
import CreateEvent from "../presentation/CreateEvent"

export default class NewEvent extends Component {

	render () {
		return (
			<div className="outline">
				<Head/>
				<CreateEvent onCreate={(event)=>this.props.createEvent(event)}/>
			</div>
		)
	}
}

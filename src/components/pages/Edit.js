import React, {Component} from "react"
import EditEvent from "../presentation/EditEvent"
import Head from "../presentation/Head"

class Edit extends Component {
	render () {
		const { events } = this.props
		const { myEvent } = events.find((event) => { return event.id.toString() === this.props.match.params.id})

		return (
			<div className="outline">
				<Head/>
				<EditEvent myevent={myEvent} id={this.props.match.params.id} onUpdate={(event)=>this.props.editEvent(event)}/>
			</div>
		)
	}
}

export default Edit

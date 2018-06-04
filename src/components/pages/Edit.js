import React, {Component} from "react"
import EditEvent from "../presentation/EditEvent"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"

class Edit extends Component {
	render () {
		// const {id} = this.props.match.params
		const { events } = this.props
		const myEvent = events.find(function(event){
		    return event.id.toString() === this.props.match.params.id
		})

		// (event) => { return event.id.toString() === this.props.match.params.id})

		console.log("This is my event", myEvent)

		return (
			<div className="outline">
				{/*<Sidebar/>*/}
				<Head/>
				<EditEvent myevent={myEvent} id={this.props.match.params.id} onUpdate={(event)=>this.props.editEvent(event)}/>
			</div>
		)
	}
}

export default Edit

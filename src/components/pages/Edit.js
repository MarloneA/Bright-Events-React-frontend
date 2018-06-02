import React, {Component} from "react"
import EditEvent from "../presentation/EditEvent"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"

class Edit extends Component {
	render () {
		// const {id} = this.props.match.params
		console.log("We are the props", this.props)
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>
				<EditEvent id={this.props.match.params.id} onUpdate={(event)=>this.props.editEvent(event)}/>
			</div>
		)
	}
}

export default Edit

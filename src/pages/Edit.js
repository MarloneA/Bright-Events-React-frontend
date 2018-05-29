import React, {Component} from "react"
import EditEvent from "../components/EditEvent"
import Head from "../components/Head"
import Sidebar from "../components/Sidebar"

class Edit extends Component {
	render () {
		const {id} = this.props.match.params
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>
				<EditEvent id={id}/>
			</div>
		)
	}
}

export default Edit

import React, {Component} from "react"
import EditEvent from "../presentation/EditEvent"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"

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

import React, {Component} from "react"
import ManageMyEvents from "../presentation/ManageEvents"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"
import Footer from "../presentation/Footer"

class Manage extends Component {

	componentDidMount() {
		this.props.fetchMyEvents()
	}
	render () {
		const { events, loading } = this.props
		if(loading){
			return <h3>WE are loading .....</h3>
		}
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>
				<ManageMyEvents events={events}/>
				<Footer/>
			</div>
		)
	}
}

export default Manage

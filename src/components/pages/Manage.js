import React, {Component} from "react"
import ManageMyEvents from "../presentation/ManageEvents"
import Head from "../presentation/Head"
import Sidebar from "../presentation/Sidebar"

class Manage extends Component {

	componentDidMount() {
        this.props.fetchMyEvents()
    }

    onClick = (id) => {
        this.props.deleteEvent(id)
    }

	render () {
		const { events, loading } = this.props;
		// if(loading){
		// 	return <h3>Loading .....</h3>
		// }
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>
				<ManageMyEvents onDelete={this.onClick} events={events}/>
			</div>
		)
	}
}

export default Manage

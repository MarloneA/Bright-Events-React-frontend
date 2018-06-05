import React, {Component} from "react"

import Sidebar from "../presentation/Sidebar"
import Head from "../presentation/Head"
import Events from "../presentation/Events"

export default class Home extends Component {

	componentDidMount() {
		this.props.fetchEvents()
	}

	render () {

		const {events, loading, searchEvent} = this.props
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>
				<Events events={events} loading={loading} searchlist={searchEvent}/>
			</div>
		)
	}
}

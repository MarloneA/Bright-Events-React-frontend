import React, {Component} from "react"
import Search from "./Search"
import FilterLocation from "./FilterLocation"
import FilterCategory from "./FilterCategory"

export default class Sidebar extends Component {

	render () {
		return (
			<nav id="sidebar" className="nav-sidebar-style custom-nav-bar">
				<div className="sidebar-header custom-sidebar-header">
					<h3 className="sidebar-header-h3 custom-sidebar-h3">Bright Events</h3>
				</div>
				<h3 className="sidebar-header-share custom-sidebar-header-share">Connect Share Inspire</h3>
				<Search/>
				<FilterCategory/>
				<FilterLocation/>
				<div className="cs-promo">
					<p id="fp">All the best events in one place. You could also be a host. create an event today:</p>
					<button className="custom-btn btn btn-default btn-lg cs-subscribe"><a href="/create-event">Create Event</a></button>
				</div>
			</nav>
		)
	}
}
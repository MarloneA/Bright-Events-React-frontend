import React, {Component} from "react"
import Search from "./Search"
import FilterLocation from "./FilterLocation"
import FilterCategory from "./FilterCategory"

export default class Sidebar extends Component {

	render () {
		return (
			<nav id="sidebar" className="nav-sidebar-style custom-nav-bar">
				{/*<button className="cs-toggler">click me</button>*/}
				<div className="sidebar-header custom-sidebar-header">
					<h3 className="sidebar-header-h3 custom-sidebar-h3">Bright Events</h3>
				</div>
				<h3 className="sidebar-header-share custom-sidebar-header-share">Connect Share Inspire</h3>
				<Search  />
				<FilterCategory/>
				<FilterLocation/>
				<div className="cs-promo">
					{/*<p>Want to be informed of the best events in your inbox? Then subscribe to our monthly newsletter! We promise we will not spam you</p>*/}
					<p id="fp">All the best events in one place. You could also be a host. create an event today:</p>
					<button className="custom-btn btn btn-default btn-lg cs-subscribe"><a href="/create-event">Create Event</a></button>
				</div>
			</nav>
		)
	}
}
// triggerForm={this.populateDataOne}
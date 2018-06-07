import React, {Component} from "react"
import { content } from "./EventCard"

export default class Events extends Component {
	render () {
		const {events, loading, searchlist} = this.props
		const display = function(){

			if(searchlist.length !== 0){
				return content(searchlist)
			}
			return content(events)
		}


		return (
			<div id="custom-main-content">
				{loading}
				{display()}
				<div className="line"></div>
			</div>
		)
	}
}

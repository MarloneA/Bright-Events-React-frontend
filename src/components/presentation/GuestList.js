import React, {Component} from "react"
import Head from "./Head"
import {authHeader} from "../../helpers/auth_header"

class GuestList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			guests:[]
		}
	}

	componentWillMount(){
	    let id = this.props.match.params.id
		fetch(`https://andela-brightevents.herokuapp.com/api/v2/event/${id}/rsvp`,{
			method: "GET",
			headers:{
				"token": authHeader()["token"]
			}
		}).then(
			res =>res.json()
		).then(data=>{
			console.log("I have mounted, here is your data", data)
			this.setState({
				guests:data.guests
			})
		})
	}

	render() {

		const { guests } = this.state
		const rows = guests.map(
			(guest, index)=>(
				<tr key={index}>
					<th scope="row">1</th>
					<td>{guest.event}</td>
					<td>{guest.name}</td>
					<td>{guest.email}</td>
				</tr>
			)
		)
		return (
			<div>
				<Head/>
				<table className="table">
					<thead>
                        <h4>Guest List</h4>
						<tr>
							<th scope="col">#</th>
							<th scope="col">Event</th>
							<th scope="col">Attendee</th>
							<th scope="col">email</th>
						</tr>
					</thead>
					<tbody>
						{rows}
					</tbody>
				</table>
			</div>
		)
	}
}


export default GuestList

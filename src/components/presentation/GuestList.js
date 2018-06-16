import React, {Component} from "react"
import Head from "./Head"
import {authHeader} from "../../helpers/auth_header"

class GuestList extends Component {
	constructor(props) {
		super(props)
		this.state = {
		    attendees:[ ]
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
			console.log("I have mounted, here is your data", data["guests"])
			this.setState({
				attendees:data.guests
			})
		}).catch(error=>console.log(error))
	}

	render() {

		const { attendees }  = this.state

		const rows = function(items){
			return items.map(
				(item, index)=>(
					<tr key={index}>
						<th scope="row">{index+1}</th>
						<td>{item.event}</td>
						<td>{item.name}</td>
						<td>{item.email}</td>
					</tr>
				)
			)
		}
		const display = function(){
			if (attendees !== []){
				return rows(attendees)
			}
			return <p>Looks lonely in here</p>
		}

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
						{display()}
					</tbody>
				</table>
			</div>
		)
	}
}


export default GuestList


// console.log(guests)
//
// const row = function(param){
//     if(param === []){
//         return param.push({"event":"N/A", "name":"N/A", "email":"N/A"})
//     }else{
//         return param
//     }
// }

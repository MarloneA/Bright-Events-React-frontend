import React, {Component} from "react"
import { Link } from "react-router-dom"
import {authHeader} from "../../helpers/auth_header"

export default class Rsvp extends Component {

	constructor(props) {
		super(props)
		this.state = {
			message:""
		}
		this.onClick = this.onClick.bind(this)
	}
	onClick(){
		let id = this.props.id
		let reqbody = {
			"email":"marlone911@gmail.com"
		}
		fetch(`https://andela-brightevents.herokuapp.com/api/v2/event/${id}/rsvp`,{
			method: "POST",
			headers:{
				"x-access-token": authHeader()["token"],
				"Content-Type": "application/json"
			},
			body:JSON.stringify(reqbody)
		}).then(
			res =>res.json()
		).then(data=>{
			console.log(data)
			this.setState({
				message:data.message
			})
		})
	}

	render(){
		return (
			<div>
				<Link onClick={this.onClick} className="cs-rsvd" to={"#"} data-toggle="modal" data-target=".rsvp" >
                    Book reservation
				</Link>
				<div className="modal fade rsvp" id="exampleModal" tabIndex="-1" role="dialog"
					aria-labelledby="exampleModalLabel" aria-hidden="true">
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
                                {this.state.message}
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}
}

// let id = this.props.match.params.id
// fetch(`https://andela-brightevents.herokuapp.com/api/v2/event/${id}/rsvp`,{
// 	method: "POST",
// 	headers:{
// 		"token": authHeader()["token"]
// 	}
// }).then(
// 	res =>res.json()
// ).then(data=>{
// 	console.log(data)
// })
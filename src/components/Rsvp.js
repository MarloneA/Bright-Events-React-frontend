import React, {Component} from "react"

export default class Rsvp extends Component {

	constructor(props) {
		super(props)
		this.state = {
			email: "",
			rsvp : false,
			event : ""
		}
	}

	onSubmit(e){
	    e.preventDefault
    }

	render(){
		return (
			<button className="custom-btn btn btn-default btn-lg">
                RSVP
			</button>
		)
	}
}

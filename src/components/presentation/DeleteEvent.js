import React, {Component} from "react"
import { Link } from "react-router-dom"
import {authHeader} from "../../helpers/auth_header"
import {history} from "../../helpers"
import {deleteEvent} from "../../actions"
import {connect} from "react-redux"

class DeleteComponent extends Component {
	constructor(props) {
		super(props)

		this.onClick = this.onClick.bind(this)
	}
	onClick(e){
	    let id = this.props.id
		this.props.deleteEvent(id)
	}

	render() {
	    let id = this.props.id
		return (
			<div>
				<button onClick={this.onClick} className="custom-btn cs-del-modal edit btn btn-danger btn-sm" >Delete</button>
			</div>
		)
	}
}

const mapStateToProps = state=>{
	return {
		deleteEvent: state.deletedEvent,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		deleteEvent: (deleteid)=>dispatch(deleteEvent(deleteid))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteComponent)



import React, {Component} from "react"
import { searchEvent } from "../../actions"
import {connect} from "react-redux"

class Search extends Component {
	constructor (props) {
		super(props)
		this.state = {
			search: "",
			data: {
				search:[]
			}
		}

		this.onChange = this.onChange.bind(this)
		this.onSubmit = this.onSubmit.bind(this)
	}
	onChange (e) {
		this.setState({
			search: e.target.value
		})
	}
	onSubmit (e) {
		e.preventDefault()
		let q = this.state.search
		this.props.searchEvent(q)
	}

	render () {
		return (
			<div>
				<form onSubmit={this.onSubmit}>
					<input
						aria-label="Search"
						className="form-control mr-sm-2 search-input custom-search-input cs-subscrib"
						placeholder="Search"
						type="text"
						onChange={this.onChange}
					/>
					<span className="search icon">

					</span>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = dispatch =>{
	return {
		searchEvent: (query)=>dispatch(searchEvent(query))
	}
}

export default connect(null, mapDispatchToProps)(Search)


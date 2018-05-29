/* eslint-disable no-mixed-spaces-and-tabs */
import React, {Component} from "react"

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
		fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${q}/100/1`).then(
			res => {
				return res.json()
			}
		).then(
			data => {
				console.log(data)
				this.setState({
					data: {
					    search: data.search
					}
				})
			}
		)
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
					<span className="search icon"></span>
				</form>
			</div>
		)
	}
}

export default Search

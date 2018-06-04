import React, {Component} from "react"

class FilterCategory extends Component {
	constructor (props) {
		super(props)
		this.state = {
			categoryFilter: "",
			data: {}
		}

		this.onChange = this.onChange.bind(this)
	}
	onChange (e) {
		let q = e.target.value
		// console.log(q)
		fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/category/${q}/1/1`).then(
			res => {
				return res.json()
			}
		).then(
			data => {
				console.log(data)
				this.setState({
					categoryFilter: q,
					data: data
				})
			}
		)
	}

	render () {
		// console.log("I am the data from the state",this.state.data)
		return (
			<form className="form-group custom-form-group">
				<label htmlFor="category" className="style-label-category custom-filter-label-category">Filter by Category</label>
				<select
					className="form-control category-styling cs-subscrib"
					id="category"
					name="categoryFilter"
					onChange={this.onChange}
				>
					<option>...</option>
					<option>Workshops</option>
					<option>Science & Tech</option>
					<option>Networking</option>
					<option>Seminar</option>
				</select>
			</form>

		)
	}
}

export default FilterCategory

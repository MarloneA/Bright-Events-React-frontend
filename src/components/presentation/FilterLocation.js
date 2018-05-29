import React, {Component} from "react"

class FilterLocation extends Component {
	constructor (props) {
		super(props)
		this.state = {
			locationFilter: "",
			data: {}
		}

		this.onChange = this.onChange.bind(this)
	}
	onChange (e) {
        let q = e.target.value
        // console.log(q)
        fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/location/${q}/1/1`).then(
            res => {
                return res.json()
            }
        ).then(
            data => {
                console.log(data)
                this.setState({
                    locationFilter: q,
                	data: data
                })
            }
        )
	}

	render () {
		// console.log(this.state)
		return (
			<form className="form-group">
				<label htmlFor="location" className="style-label-location custom-filter-label-location">Filter by location</label>
				<select
					className="form-control location-styling cs-subscrib"
					id="location"
                    name="locationFilter"
					onChange={this.onChange}
				>
					<option>...</option>
					<option>Spain</option>
					<option>Morroco</option>
					<option>Abuja</option>
					<option>Tunis</option>
				</select>
			</form>
		)
	}
}

export default FilterLocation

import {Component} from "react"

class manageSearch extends Component {

	componentDidMount() {

	}
	render () {
		const { loading } = this.props
		if(loading){
			return <h3>WE are loading .....</h3>
		}
		return (
			<div className="outline">
				<Sidebar/>
				<Head/>

				<Footer/>
			</div>
		)
	}
}

export default manageSearch
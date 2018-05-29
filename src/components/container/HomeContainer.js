import {connect} from "react-redux"
import Home from "../pages/Home"
import {fetchEvents} from "../../actions/index"

const mapStateToProps = (state)=>{
	return {
		events : state.events,
		loading: state.loading
	}

}

const mapDispatchToProps = dispatch=>{
	return {
		fetchEvents : ()=>dispatch(fetchEvents())
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
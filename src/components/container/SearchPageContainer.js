import SearchPage from "../pages/SearchPage"
import {connect} from "react-redux"
import {searchEvent} from "../../actions"

const mapStateToProps = state=>{
	return {
		searchEvent: state.searchEvent,
		events: state.events,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		searchEvent: (query=>dispatch(searchEvent(query)))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage)

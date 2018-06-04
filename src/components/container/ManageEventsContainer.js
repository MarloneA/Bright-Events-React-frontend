import {connect} from "react-redux"
import Manage from "../pages/Manage"
import {deleteEvent, fetchMyEvents} from "../../actions"

const mapStateToProps = state=>{
	return {
		events : state.myEvents,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		fetchMyEvents : ()=>dispatch(fetchMyEvents()),
        deleteEvent: (deleteid)=>dispatch(deleteEvent(deleteid))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Manage)
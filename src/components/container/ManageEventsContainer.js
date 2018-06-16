import {connect} from "react-redux"
import {deleteEvent, fetchMyEvents} from "../../actions"
import ManageMyEvents from "../presentation/ManageEvents";

const mapStateToProps = state=>{
	console.log("the whole state is ", state)
	return {
		events : state.myEvents,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		fetchMyEvents : ()=>dispatch(fetchMyEvents()),
        deleteEvent: (id)=>dispatch(deleteEvent(id))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(ManageMyEvents)
import {connect} from "react-redux"
import {editEvent, fetchSingleEvent} from "../../actions";
import EditEvent from "../presentation/EditEvent";

const mapStateToProps = state=>{
	return {
		event:state.event,
		editEvent:state.editEvent,
		loading:state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		editEvent: (event)=>dispatch(editEvent(event)),
		fetchEvent:(id)=>dispatch(fetchSingleEvent(id))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(EditEvent)
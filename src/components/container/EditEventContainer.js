import {connect} from "react-redux"
import Edit from "../pages/Edit"
import {editEvent} from "../../actions";

const mapStateToProps = state=>{

	return {
		events: state.myEvents,
		editEvent:state.editEvent,
		loading:state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		editEvent: (event)=>dispatch(editEvent(event))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Edit)
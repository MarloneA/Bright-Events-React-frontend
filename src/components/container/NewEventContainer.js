import {connect} from "react-redux"
import NewEvent from "../pages/NewEvent"
import {createEvent} from "../../actions"

const mapStateToProps = state=>{
	return {
		newEvent: state.newEvent,
		loading: state.loading
	}
}

const mapDispatchToProps = dispatch=>{
	return {
		createEvent : (event)=>dispatch(createEvent(event))
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(NewEvent)
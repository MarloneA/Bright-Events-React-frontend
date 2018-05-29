import {eventActionTypes} from "../actionTypes/event.constants"
export default (loading=false, action)=>{
	switch (action.type){
	case eventActionTypes.NETWORK_REQUEST:
		return true
	case eventActionTypes.FETCH_MY_EVENTS:
		return false
	default:
		return loading
	}
}
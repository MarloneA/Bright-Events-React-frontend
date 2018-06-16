import {eventActionTypes} from "../actionTypes/event.constants"
export default (loading=false, action)=>{
	if (action.type === eventActionTypes.NETWORK_REQUEST){
		return true
	} else {
		return false
	}
	// switch (action.type){
	// case eventActionTypes.NETWORK_REQUEST:
	// 	return true
	// case eventActionTypes.FETCH_MY_EVENTS:
	// 	return false
	// case eventActionTypes.DELETE_EVENT:
	// default:
	// 	return loading
	// }
}
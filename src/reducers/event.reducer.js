import {eventActionTypes} from "../actionTypes/event.constants"

export default (event={}, action)=>{
	if (action.type === eventActionTypes.EVENT_FETCHED) {
		return action.event
	} else {
		return event
	}
}
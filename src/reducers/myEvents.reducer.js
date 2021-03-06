import {eventActionTypes} from "../actionTypes/event.constants"

export default (myEvents=[], action)=>{
	switch (action.type){
	case eventActionTypes.FETCH_MY_EVENTS:
		return action.myEvents
	case eventActionTypes.DELETE_EVENT:
		// return myEvents.filter((event) => event.id !== action.id)
		return myEvents.filter((event) => event.id !== action.id)
	default:
		return myEvents
	}
}
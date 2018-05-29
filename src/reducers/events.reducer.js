import {eventActionTypes} from "../actionTypes/event.constants"

export default (events=[], action)=>{
	switch (action.type){
	case eventActionTypes.EVENTS_FETCHED:
		return action.events
	default:
		return events
	}
}
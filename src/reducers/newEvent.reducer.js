import {eventActionTypes} from "../actionTypes/event.constants"

export default (newEvent={}, action)=>{
	switch (action.type){
	case eventActionTypes.CREATE_EVENT:
		return action.newEvent
	default:
		return newEvent
	}
}
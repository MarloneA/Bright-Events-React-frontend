import {eventActionTypes} from "../actionTypes/event.constants"

export default (deletedEvent={}, action)=>{
	switch (action.type){
	case eventActionTypes.DELETE_EVENT:
		return action.deletedEvent
	default:
		return deletedEvent
	}
}
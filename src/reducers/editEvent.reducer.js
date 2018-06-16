import {eventActionTypes} from "../actionTypes/event.constants"

export default (editedEvent={}, action)=>{
	switch (action.type){
	case eventActionTypes.EDIT_EVENT:
		return action.editedEvent
	default:
		return editedEvent
	}
}
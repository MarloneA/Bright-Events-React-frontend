import {eventActionTypes} from "../actionTypes/event.constants"

export default (myEvents=[], action)=>{
	switch (action.type){
	case eventActionTypes.FETCH_MY_EVENTS:
		return action.myEvents
	default:
		return myEvents
	}
}
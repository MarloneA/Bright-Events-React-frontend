import {eventActionTypes} from "../actionTypes/event.constants"

export default (searchedEvent=[], action)=>{
	switch (action.type){
	case eventActionTypes.SEARCH_EVENT:
		return action.searchedEvent
	default:
		return searchedEvent
	}
}
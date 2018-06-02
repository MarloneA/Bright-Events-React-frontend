import { combineReducers } from "redux"
import { registration } from "./register.reducer"
import { authentication } from "./login.reducer"
import { alert } from "./alert.reducer"
import events from "../reducers/events.reducer"
import loading from "../reducers/loading.reducer"
import myEvents from "../reducers/myEvents.reducer"
import newEvent from "../reducers/newEvent.reducer"
import editEvent from "../reducers/editEvent.reducer"
import deletedEvent from "../reducers/deleteEvent.reducer"

const rootReducer = combineReducers({
	registration,
	authentication,
	alert,
	loading,
	events,
	myEvents,
	newEvent,
	editEvent,
	deletedEvent
})
export default rootReducer

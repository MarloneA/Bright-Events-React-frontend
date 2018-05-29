import { combineReducers } from "redux"
import { registration } from "./register.reducer"
import { authentication } from "./login.reducer"
import { alert } from "./alert.reducer"
import events from "../reducers/events.reducer"
import loading from "../reducers/loading.reducer"
import myEvents from "../reducers/myEvents.reducer"

const rootReducer = combineReducers({
	registration,
	authentication,
	alert,
	loading,
	events,
	myEvents
})
export default rootReducer

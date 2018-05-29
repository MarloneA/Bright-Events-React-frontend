import {eventActionTypes} from "../actionTypes"
import {authHeader} from "../helpers/auth_header"

const {NETWORK_REQUEST, EVENTS_FETCHED, FETCH_MY_EVENTS} = eventActionTypes

export const loading = ()=>({type:NETWORK_REQUEST})

const eventsReceived = events => ({
	type:EVENTS_FETCHED,
	events
})
const myEventsReceived = myEvents => ({
	type: FETCH_MY_EVENTS,
	myEvents
})
export const fetchEvents = ()=>dispatch=>{
	dispatch(loading())
	return fetch("https://andela-brightevents.herokuapp.com/api/v2/events").then(
		res =>res.json()
	).then(data => {
		dispatch(eventsReceived(data.Events))
	})
		.catch(error=>console.log("the error received is ", error))

}

export const fetchMyEvents = ()=>dispatch=>{
	dispatch(loading())
	return fetch("https://andela-brightevents.herokuapp.com/api/v2/events/myevents", {
		headers: {
			"token": authHeader()["token"]
		}
	}).then(
		res =>{return res.json()}
	).then(
		data => {
			dispatch(myEventsReceived(data.events))
		}
	).catch(error=>console.log("the error received is ", error))
}

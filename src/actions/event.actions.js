import {eventActionTypes} from "../actionTypes"
import {authHeader} from "../helpers/auth_header"
import {history} from "../helpers"

const {NETWORK_REQUEST, EVENTS_FETCHED, FETCH_MY_EVENTS, CREATE_EVENT, EDIT_EVENT, DELETE_EVENT, SEARCH_EVENT} = eventActionTypes

export const loading = ()=>({type:NETWORK_REQUEST})

const eventsReceived = events => ({
	type:EVENTS_FETCHED,
	events
})
const myEventsReceived = myEvents => ({
	type: FETCH_MY_EVENTS,
	myEvents
})
const eventCreated = newEvent => ({
	type: CREATE_EVENT,
	newEvent
})
const editingEvent = editedEvent => ({
	type: EDIT_EVENT,
	editedEvent
})
const deletingEvent = id =>({
	type: DELETE_EVENT,
	id
})
const searchingEvent = searchedEvent =>({
	type: SEARCH_EVENT,
	searchedEvent
})



export const createEvent = eventData =>dispatch=>{
	dispatch(loading())
	return fetch("https://andela-brightevents.herokuapp.com/api/v2/events",{
		method: "POST",
		headers:{
			"token": authHeader()["token"],
			"Content-Type": "application/json"
		},
		body:JSON.stringify(eventData)
	}).then(
		res =>res.json()
	).then(data=>{
		console.log(data)
		dispatch(eventCreated(data))
		history.push(`/events/${data.event.id}`)
	})

}
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
export const editEvent = eventData =>dispatch=>{
	dispatch(loading())
	let id = eventData.id
	return fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`,{
		method: "PUT",
		headers:{
			"token": authHeader()["token"],
			"Content-Type": "application/json"
		},
		body:JSON.stringify(eventData)
	}).then(res=>{ return res.json()}
	).then(data=>{
		console.log(data)
		dispatch(editingEvent(data))
		history.push(`/events/${id}`)
	}).catch(error=>console.log("the error received is ", error))

}

export const deleteEvent = deleteid => dispatch =>{
	dispatch(loading())
	let id = deleteid
	return fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`,{
		method: "DELETE",
		headers:{
			"token": authHeader()["token"],
			"Content-Type": "application/json"
		}
	}).then(
		res=>{ return res.json()}
	).then(data=>{
		console.log(data)
		dispatch(deletingEvent(id))
		history.push("/manage-events")
	}).catch(error=>console.log("the error received is ", error))
}
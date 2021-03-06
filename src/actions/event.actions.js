import {eventActionTypes} from "../actionTypes"
import {authHeader} from "../helpers/auth_header"
import {history} from "../helpers"

const {NETWORK_REQUEST, EVENTS_FETCHED,EVENT_FETCHED, FETCH_MY_EVENTS, CREATE_EVENT, EDIT_EVENT, DELETE_EVENT, SEARCH_EVENT} = eventActionTypes

export const loading = ()=>({type:NETWORK_REQUEST})

export const eventsReceived = events => ({
	type:EVENTS_FETCHED,
	events
})
const eventFetched = event=>({type:EVENT_FETCHED,event})



export const myEventsReceived = myEvents => ({
	type: FETCH_MY_EVENTS,
	myEvents
})
export const eventCreated = newEvent => ({
	type: CREATE_EVENT,
	newEvent
})
export const editingEvent = editedEvent => ({
	type: EDIT_EVENT,
	editedEvent
})
export const deletingEvent = id =>({
	type: DELETE_EVENT,
	id
})
export const searchingEvent = searchedEvent =>({
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

export const fetchSingleEvent = (id)=>dispatch=>{
	dispatch(loading())
	return fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`).then(
		res =>res.json()
	).then(data => {
		dispatch(eventFetched(data.event))
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

export const deleteEvent = id => dispatch =>{
	console.log("the event is ", id)
	dispatch(loading())
	return fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`,{
		method: "DELETE",
		headers:{
			"token": authHeader()["token"],
			"Content-Type": "application/json"
		}
	}).then(
		res=>{ return res.json()}
	).then(data=>{
		dispatch(deletingEvent(id))
		history.push("/manage-events")
	}).catch(error=>console.log("the error received is ", error))
}

export const searchEvent = query => dispatch =>{
	dispatch(loading())
	return fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${query}/100/1`).then(
		res => {
			return res.json()
		}
	).then(
		data => {
			dispatch(searchingEvent(data.search))
		}
	)
}
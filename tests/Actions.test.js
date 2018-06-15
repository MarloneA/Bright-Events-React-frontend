import  { searchingEvent } from "../src/actions/index"
import { eventsReceived } from "../src/actions/index"
import { eventCreated } from "../src/actions/index"
import { editingEvent } from "../src/actions/index"
import { deletingEvent } from "../src/actions/index"
import { myEventsReceived } from "../src/actions/index"

import { request } from "../src/actions/index"
import { success} from "../src/actions/index"
import { failure } from "../src/actions/index"

import { registerRequest } from "../src/actions/index"
import { registerSuccess } from "../src/actions/index"
import { registerFailure } from "../src/actions/index"

import { userConstants}  from "../src/actionTypes/index"
import { eventActionTypes } from "../src/actionTypes/index"

import events from "../src/reducers/events.reducer"
import newEvent from "../src/reducers/newEvent.reducer"
import editEvent from "../src/reducers/editEvent.reducer"
import myEvents from "../src/reducers/myEvents.reducer"
import { registration } from "../src/reducers/register.reducer"
import  expect  from "expect"

describe("search actions", () => {
	it("should create an action to search event", () => {
		const searchedEvent = "Richard"
		const expectedAction = {
			type: eventActionTypes.SEARCH_EVENT,
			searchedEvent
		}
		expect(searchingEvent(searchedEvent)).toEqual(expectedAction)
	})
})

describe("Retrieve events actions", () => {
	it("should create an action to retrieve all events", () => {
		const events = [{"title":"Shawarma", "location":"nairobi"}]
		const expectedAction = {
			type: eventActionTypes.EVENTS_FETCHED,
			events
		}
		expect(eventsReceived(events)).toEqual(expectedAction)
	})
})

describe("Create event actions", () => {
	it("should create an action to create an event", () => {
		const newEvent = {"title":"Shawarma", "location":"nairobi"}
		const expectedAction = {
			type: eventActionTypes.CREATE_EVENT,
			newEvent
		}
		expect(eventCreated(newEvent)).toEqual(expectedAction)
	})
})

describe("Update events actions", () => {
	it("should create an action to update an existing event", () => {
		const editedEvent = {"title":"Shawarma", "location":"nairobi"}
		const expectedAction = {
			type: eventActionTypes.EDIT_EVENT,
			editedEvent
		}
		expect(editingEvent(editedEvent)).toEqual(expectedAction)
	})
})

describe("Delete events actions", () => {
	it("should create an action to delete an event", () => {
		const id = 36
		const expectedAction = {
			type: eventActionTypes.DELETE_EVENT,
			id
		}
		expect(deletingEvent(id)).toEqual(expectedAction)
	})
})

describe("Retrieve my events actions", () => {
	it("should create an action to retrieve all my events", () => {
		const myEvents = [{"title":"Great gatsby", "location":"nairobi"}]
		const expectedAction = {
			type: eventActionTypes.FETCH_MY_EVENTS,
			myEvents
		}
		expect(myEventsReceived(myEvents)).toEqual(expectedAction)
	})
})

describe("login request", () => {
	it("should create an action to send login request", () => {
		const user = {"email":"test@email.com", "password":"1234"}
		const expectedAction = {
			type: userConstants.LOGIN_REQUEST,
			user
		}
		expect(request(user)).toEqual(expectedAction)
	})
})

describe("login success", () => {
	it("should create an action to send login success", () => {
		const user = {"email":"test@email.com", "password":"1234"}
		const expectedAction = {
			type: userConstants.LOGIN_SUCCESS,
			user
		}
		expect(success(user)).toEqual(expectedAction)
	})
})

describe("login failure", () => {
	it("should create an action to send login failure when attempt to login fails", () => {
		const error = "Invalid email/password"
		const expectedAction = {
			type: userConstants.LOGIN_FAILURE,
			error
		}
		expect(failure(error)).toEqual(expectedAction)
	})
})

describe("register request", () => {
	it("should create an action to send a register request", () => {
		const user = {"firstname":"test", "lastname":"testaroo","email":"test@gmail.com"}
		const expectedAction = {
			type: userConstants.REGISTER_REQUEST,
			user
		}
		expect(registerRequest(user)).toEqual(expectedAction)
	})
})

describe("register success", () => {
	it("should create an action to send a register success", () => {
		const user = {"firstname":"test", "lastname":"testaroo","email":"test@gmail.com"}
		const expectedAction = {
			type: userConstants.REGISTER_SUCCESS,
			user
		}
		expect(registerSuccess(user)).toEqual(expectedAction)
	})
})

describe("register failure", () => {
	it("should create an action to send a failed registration attempt", () => {
		const error = "Invalid email"
		const expectedAction = {
			type: userConstants.REGISTER_FAILURE,
			error
		}
		expect(registerFailure(error)).toEqual(expectedAction)
	})
})



describe("events reducer", () => {
	it("should handle EVENTS_FETCHED", () => {
		expect(
			events([], {
				type: eventActionTypes.EVENTS_FETCHED,
				events: [{"title":"Shawarma", "location":"nairobi"}]
			})
		).toEqual([{"title":"Shawarma", "location":"nairobi"}])
	})
})

describe("create events reducer", () => {
	it("should handle CREATE_EVENT", () => {
		expect(
			newEvent({}, {
				type: eventActionTypes.CREATE_EVENT,
				newEvent: {"title":"test event", "location":"nairobi"}
			})
		).toEqual({"title":"test event", "location":"nairobi"})
	})
})

describe("Update events reducer", () => {
	it("should handle EDIT_EVENT", () => {
		expect(
			editEvent({}, {
				type: eventActionTypes.EDIT_EVENT,
				editedEvent: {"title":"test edit event", "location":"nairobi"}
			})
		).toEqual({"title":"test edit event", "location":"nairobi"})
	})
})

describe("Retrieve my events reducer", () => {
	it("should handle FETCH_MY_EVENTS", () => {
		expect(
			myEvents({}, {
				type: eventActionTypes.FETCH_MY_EVENTS,
				myEvents: [{"title":"test fetch my events", "location":"nairobi"}]
			})
		).toEqual([{"title":"test fetch my events", "location":"nairobi"}])
	})
})

describe("Registration reducer", () => {
	it("should handle REGISTER_REQUEST ", () => {
		expect(
			registration({}, {
				type: userConstants.REGISTER_REQUEST,
			})
		).toEqual({ registering: true, registered: false  })
	})

	it("should handle REGISTER_SUCCESS ", () => {
		expect(
			registration({}, {
				type: userConstants.REGISTER_SUCCESS,
			})
		).toEqual({ registering: false, registered: true  })
	})

	it("should handle REGISTER_FAILURE ", () => {
		expect(
			registration({}, {
				type: userConstants.REGISTER_FAILURE,
			})
		).toEqual({ registering: false, registered: false  })
	})
})

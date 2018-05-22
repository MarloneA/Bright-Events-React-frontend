import {eventActionTypes} from '../actionTypes'
import { history } from '../helpers'
import { eventService } from '../services/event.service'

export const eventCreated = (createdEvent) => ({
  type: eventActionTypes.EVENT_CREATED,
  createdEvent
})

export const createEvent = eventDetails => (dispatch) => {
    console.log("we arwe at actions", eventDetails)
  eventService.create(eventDetails).then(event => {
    dispatch(eventCreated(event))
    history.push(`/events/${event.event.id}`)
  })
}

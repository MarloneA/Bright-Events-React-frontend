import {authHeader} from '../helpers/auth_header'

export const eventService = {
  create
}

function create (eventDetails) {
  console.log('fetching', eventDetails)
  return fetch('https://andela-brightevents.herokuapp.com/api/v2/events', {
    method: 'POST',
    headers: {
      ContentType: 'application/json',
      AccessControlAllowOrigin: 'https://andela-brightevents.herokuapp.com/api/v2',
      token: authHeader()['token']
    },

    body: JSON.stringify(eventDetails)
  }).then(handleResponse)
}

function handleResponse (response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }

  return response.json()
}

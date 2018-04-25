import { authHeader } from "../helpers";

export const eventService = {
    retrieve_all
}

let user = authHeader()

function retrieve_all () {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'token': user['token'] },
  }

  return fetch('https://andela-brightevents.herokuapp.com/api/v2/events', requestOptions).then(handleResponse)
}

function handleResponse (response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }

  return response.json()
}

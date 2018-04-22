import { authHeader } from '../helpers'

export const userService = {
  login,
  logout,
  register
}

function login (user) {
  let url = 'https://andela-brightevents.herokuapp.com/api/v2/auth/login'

  const request = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors',
    body: JSON.stringify(user)
  }

  const response = fetch(url, request)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText)
      }
      return response.json()
    })
    .then(user => {
      // login successful if there's a jwt token in the response
      if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('user', JSON.stringify(user))
      }

      return user
    })

  return response
}

function logout () {
  localStorage.removeItem('user')
}

function register (user) {
  let url = 'https://andela-brightevents.herokuapp.com/api/v2/auth/register'

  const requestData = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    mode: 'no-cors', // no-cors, cors, *same-origin
    body: JSON.stringify(user)
  }

  return fetch(url, requestData).then(handleResponse).catch(
    error => {
      console.log(error)
    }
  )
}

function handleResponse (response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }

  return response.json()
}

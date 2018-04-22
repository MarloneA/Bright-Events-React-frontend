
export const userService = {
  login,
  logout,
  register
}

function login (user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch('https://andela-brightevents.herokuapp.com/api/v2/auth/login', requestOptions)
    .then(response => {
      if (!response.ok) {
        return Promise.reject(response.statusText)
      }

      return response.json()
    })
    .then(
      user => {
        if (user && user.token) {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user.token))
        }

        return user.token
      })
}

function logout () {
  localStorage.removeItem('user')
}

function register (user) {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user)
  }

  return fetch('https://andela-brightevents.herokuapp.com/api/v2/auth/register', requestOptions).then(handleResponse)
}

function handleResponse (response) {
  if (!response.ok) {
    return Promise.reject(response.statusText)
  }

  return response.json()
}

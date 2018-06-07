
export const userService = {
	login,
	logout,
	register
}

function login (user) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user)
	}

	return fetch("https://andela-brightevents.herokuapp.com/api/v2/auth/login", requestOptions)
		.then(response => {
			if (!response.ok) {
				return Promise.reject(response.statusText)
			}

			return response.json()
		})
		.then(
			res => {
				if (res && res.user.token) {
					// store user details and jwt token in local storage to keep user logged in between page refreshes
					localStorage.setItem("user", JSON.stringify(res.user.token))
				}

				return res.user
			})
}

function logout () {
	let token = JSON.parse(localStorage.getItem("user"))
	const requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			"token": token
		}
	}
	return fetch("https://andela-brightevents.herokuapp.com/api/v2/auth/logout", requestOptions).then(handleResponse)
}

function register (user) {
	const requestOptions = {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(user)
	}

	return fetch("https://andela-brightevents.herokuapp.com/api/v2/auth/register", requestOptions).then(handleResponse)
}

function handleResponse (response) {
	// if (!response.ok) {
	// 	return Promise.reject(response.statusText)
	// }

	return response.json()
}

import { userConstants } from "../actionTypes"
import { userService } from "../services"
import { alertActions } from "./"

import { history } from "../helpers"

export const request = user =>({
	type: userConstants.LOGIN_REQUEST,
	user
})

export const success = user =>({
	type: userConstants.LOGIN_SUCCESS,
	user
})

export const failure = error =>({
	type: userConstants.LOGIN_FAILURE,
	error
})

export const registerRequest = user =>({
	type: userConstants.REGISTER_REQUEST,
	user
})
export const registerSuccess = user =>({
	type: userConstants.REGISTER_SUCCESS,
	user
})
export const registerFailure = error =>({
	type: userConstants.REGISTER_FAILURE,
	error
})

export const loggedOut = ()=>({type: userConstants.LOGOUT})

export const login = user => dispatch => {

	dispatch(request(user))
	userService.login(user)
		.then(
			user => {
				dispatch(success(user))
				history.push("/")
			},
			error => {
				dispatch(failure(error))
				dispatch(alertActions.error(error))
			}
		)
}

export const logout = () => dispatch=>{
	userService.logout()
	dispatch(loggedOut())
}

export const register = user => dispatch => {
	dispatch(registerRequest(user))

	userService.register(user)
		.then(
			response => {
			    if(response.message === "registration succesfull"){
					dispatch(registerSuccess())
					history.push("/login")
					dispatch(alertActions.success(response.message))
				}else{
					dispatch(registerFailure(response.message))
					dispatch(alertActions.error(response.message))
				}


			}
		)
        // .catch(
		// 	err => {
		// 		dispatch(registerFailure(err))
		// 		dispatch(alertActions.error(err))
		// 	}
		// )
}

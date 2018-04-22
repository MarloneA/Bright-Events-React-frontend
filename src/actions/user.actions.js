import { userConstants } from '../constants'
import { userService } from '../services'
import { alertActions } from './'

import { history } from '../helpers'

export const userActions = {
  login,
  logout,
  register
}

function login (user) {
  return dispatch => {
    dispatch(request(user))

    userService.login(user)
      .then(
        user => {
          dispatch(success(user))
          history.push('/')
        },
        error => {
          dispatch(failure(error))
          dispatch(alertActions.error(error))
        }
      )
  }

  function request (user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success (user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure (error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function logout () {
  userService.logout()
  return { type: userConstants.LOGOUT }
}

function register (user) {
  return dispatch => {
    dispatch(request(user))

    userService.register(user)
      .then(
        response => {
          dispatch(success())
          history.push('/login')
          dispatch(alertActions.success(response.message))
        }
      ).catch(
        err => {
          dispatch(failure(err))
          dispatch(alertActions.error(err))
        }
      )
  }

  function request (user) { return { type: userConstants.REGISTER_REQUEST, user } }
  function success (user) { return { type: userConstants.REGISTER_SUCCESS, user } }
  function failure (error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

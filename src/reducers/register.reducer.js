import { userConstants } from "../actionTypes"

export function registration (state = {}, action) {
	switch (action.type) {
	case userConstants.REGISTER_REQUEST:
		return { registering: true, registered: false  }
	case userConstants.REGISTER_SUCCESS:
		return { registering: false, registered: true  }
	case userConstants.REGISTER_FAILURE:
		return { registering: false, registered: false }
	default:
		return state
	}
}

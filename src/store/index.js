import { createStore } from "redux"
import { applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "../reducers"
import logger from "../middlewares/logger.middleware"

const middleware = [ thunk, logger ]

export default createStore(
	rootReducer,
	applyMiddleware(
		...middleware
	)

)

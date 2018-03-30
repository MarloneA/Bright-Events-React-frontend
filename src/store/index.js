import {createStore} from "redux"
import {applyMiddleware} from "redux"
import thunk from "redux-thunk"
import logger from "./../middlewares/logger.middleware"
import reducers from "./../reducers"

export default createStore(reducers, applyMiddleware(logger, thunk))
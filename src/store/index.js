import {createStore} from "redux";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk";
import logger from "./../middlewares/logger.middleware";
import rootReducer from "../reducers";

export default createStore(
    rootReducer, 
    applyMiddleware(
        // logger,
        thunk
    )
)
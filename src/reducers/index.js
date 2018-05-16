import { combineReducers } from 'redux'
import { registration } from './register.reducer'
import { authentication } from './login.reducer'
import { alert } from './alert.reducer'

const rootReducer = combineReducers({
  registration,
  authentication,
  alert
})
export default rootReducer

import React, {Component} from "react"
import { Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import { history } from "./helpers"
import { alertActions } from "./actions"

import { PrivateRoute } from "./components/PrivateRoute"
import Home from "./pages/Home"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import ResetPassword from "./pages/ResetPassword"
import NewEvent from "./pages/NewEvent"
import Event from "./components/Event"

import "./assets/css/styles.css"
import Manage from "./pages/Manage"
import Edit from "./pages/Edit"
import SearchPage from "./pages/SearchPage";

class App extends Component {
	constructor (props) {
		super(props)

		const { dispatch } = this.props
		history.listen((location, action) => {
			// clear alert on location change
			dispatch(alertActions.clear())
		})
	}

	render () {
		const { alert } = this.props
		return (

			<Router history={history}>
				<div className="custom-pg-background">
					{alert.message &&
                  <div id="cs-alert" className={`alert ${alert.type}`}>{alert.message}</div>
					}
					<PrivateRoute exact path="/" component={Home}/>
					<PrivateRoute path="/manage-events" component={Manage}/>
					<PrivateRoute path="/create-event" component={NewEvent}/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<Route path="/reset-password" component={ResetPassword}/>
					<Route path="/events/:id" component={Event}/>
					<Route path="/edit-events/:id" component={ Edit }/>
                    {/*<Route path="/events/:q" component={ SearchPage }/>*/}
				</div>
			</Router>

		)
	}
}

function mapStateToProps (state) {
	const { alert } = state
	return {
		alert
	}
}

const connectedApp = connect(mapStateToProps)(App)
export { connectedApp as App }

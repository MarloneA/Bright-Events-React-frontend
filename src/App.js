import React, {Component} from "react"
import { Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import { history } from "./helpers"
import { alertActions } from "./actions"

import { PrivateRoute } from "./components/presentation/PrivateRoute"
import { Login } from "./components/pages/Login"
import { Register } from "./components/pages/Register"
import ResetPassword from "./components/pages/ResetPassword"
import Event from "./components/presentation/Event"

import "./assets/css/styles.css"

import HomeContainer from "./components/container/HomeContainer"
import ManageEventsContainer from "./components/container/ManageEventsContainer"
import NewEventContainer from "./components/container/NewEventContainer"
import EditEventContainer from "./components/container/EditEventContainer"
import GuestList from "./components/presentation/GuestList"
import LandingPage from "./components/pages/LandingPage"

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
					<Route exact path="/events" component={HomeContainer}/>
					<PrivateRoute path="/manage-events" component={ManageEventsContainer}/>
					<PrivateRoute path="/create-event" component={NewEventContainer}/>
					<PrivateRoute path="/edit-events/:id" component={ EditEventContainer }/>
					<Route exact path="/" component={ LandingPage }/>
					<Route path="/login" component={Login}/>
					<Route path="/register" component={Register}/>
					<Route path="/reset-password" component={ResetPassword}/>
					<Route path="/events/:id" component={Event}/>
					<Route path="/api/v2/event/:id/rsvp" component={GuestList}/>
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

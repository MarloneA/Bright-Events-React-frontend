import React, {Component} from 'react'
import { Link } from 'react-router-dom';
import EditEvent from './EditEvent'
import Rsvp from './Rsvp'

import thumbnail from '../assets/images/dinner.jpg'

export default class Events extends Component {
  constructor (props) {
    super(props)
    this.state = {
      events: []
    }
  }
  componentWillMount () {
    fetch('https://andela-brightevents.herokuapp.com/api/v2/events').then(
      res => {
        return res.json()
      }
    ).then(
      data => {
        this.setState({events: data.Events})
      }
    )
  }

  render () {
    const content = this.state.events.map(
      event => (
        <div className="event" key={event.id}>
          <Link to={'/events/' + event.id}>
            <img className="event-img" src={thumbnail} alt="thumbnail"/>
            <div className="event-content">
              <EditEvent/>
              <h4 className="custom-event-styling">{event.title}</h4>
              <h6 className="custom-event-styling">{'Date of Event: ' + event.date_of_event}</h6>
              <p className="custom-event-styling-par">{event.description}</p>
              <h6 className="custom-event-styling cs-dcon">{'Created on: ' + event.created_on}</h6>
              <Rsvp/>
            </div>
          </Link>
        </div>
      )
    )
    return (
      <div className="custom-main-content">
        {content}
        <div className="line"></div>
      </div>
    )
  }
}

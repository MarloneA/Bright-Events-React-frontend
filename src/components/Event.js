import React, {Component} from 'react';

import EditEvent from './EditEvent';
import Rsvp from './Rsvp';

import thumbnail from '../assets/images/dinner.jpg'

export default class Event extends Component {

  render(){
    return (
      <div className="event">
        <img className="event-img" src={thumbnail} alt="thumbnail"/>
        <div className="event-content">
          <EditEvent/>
          <h4 className="custom-event-styling">{this.props.title}</h4>
          <h6 className="custom-event-styling">{this.props.date}</h6>
          <p className="custom-event-styling-par">{this.props.description}</p>
          <h6 className="custom-event-styling">{this.props.created}</h6>
          <Rsvp/>
        </div>
       </div>
    )
  }
}

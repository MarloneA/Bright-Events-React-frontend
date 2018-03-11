import React, {Component} from 'react';

import EditEvent from './EditEvent';
import thumbnail from '../pages/images/dinner.jpg'

export default class Events extends Component {

  constructor(){
    super();
    this.state = {
      title:"The great Gatsby",
      date:"Event on 12/04/2018",
      description:"This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      created:" Created on 05/03/2018"
    }
  }

  render(){
    return (
        <div className="custom-main-content">
          <div className="event">

            <img className="event-img" src={thumbnail}/>

            <div className="event-content">
              <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

              <EditEvent/>

              <h4 className="custom-event-styling">{this.state.title}</h4>
              <h6 className="custom-event-styling">{this.state.date}</h6>
              <p className="custom-event-styling-par">{this.state.description}</p>
              <h6 className="custom-event-styling">{this.state.created}</h6>

              <button className="custom-btn btn btn-default btn-lg">RSVP</button>
            </div>

           </div>
           <div className="line"></div>
           <div className="event">

             <img className="event-img" src={thumbnail}/>

             <div className="event-content">
               <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

               <h4>{this.state.title}</h4>
               <h6>{this.state.date}</h6>
               <p>{this.state.description}</p>
               <h6>{this.state.created}</h6>

               <button className="custom-btn btn btn-default btn-lg">RSVP</button>
             </div>

            </div>
            <div className="line"></div>

            <div className="event">

              <img className="event-img" src={thumbnail}/>

              <div className="event-content">
                <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

                <h4>{this.state.title}</h4>
                <h6>{this.state.date}</h6>
                <p>{this.state.description}</p>
                <h6>{this.state.created}</h6>

                <button className="custom-btn btn btn-default btn-lg">RSVP</button>
              </div>

             </div>
             <div className="line"></div>

             <div className="event">

               <img className="event-img" src={thumbnail}/>

               <div className="event-content">
                 <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

                 <h4>{this.state.title}</h4>
                 <h6>{this.state.date}</h6>
                 <p>{this.state.description}</p>
                 <h6>{this.state.created}</h6>

                 <button className="custom-btn btn btn-default btn-lg">RSVP</button>
               </div>

              </div>
              <div className="line"></div>

              <div className="event">

                <img className="event-img" src={thumbnail}/>

                <div className="event-content">
                  <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

                  <h4>{this.state.title}</h4>
                  <h6>{this.state.date}</h6>
                  <p>{this.state.description}</p>
                  <h6>{this.state.created}</h6>

                  <button className="custom-btn btn btn-default btn-lg">RSVP</button>
                </div>

               </div>
               <div className="line"></div>
        </div>
    )
  }
}

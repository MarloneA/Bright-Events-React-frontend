import React, {Component} from 'react';

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
          <div class="event">

             <button class="edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

             <h4>{this.state.title}</h4>
             <h6>{this.state.date}</h6>
             <p>{this.state.description}</p>
             <h6>{this.state.created}</h6>

             <button class="btn btn-default btn-lg">RSVP</button>
           </div>
           <div class="line"></div>

           <div class="event">

              <button class="edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

              <h4>Title of Event</h4>
              <h6>Date of event</h6>
              <p>This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <h6>Date Created</h6><button class="btn btn-default btn-lg">RSVP</button>
            </div>
            <div class="line"></div>

            <div class="event">

               <button class="edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

               <h4>Title of Event</h4>
               <h6>Date of event</h6>
               <p>This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <h6>Date Created</h6><button class="btn btn-default btn-lg">RSVP</button>
             </div>
             <div class="line"></div>

             <div class="event">

                <button class="edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

                <h4>Title of Event</h4>
                <h6>Date of event</h6>
                <p>This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <h6>Date Created</h6><button class="btn btn-default btn-lg">RSVP</button>
              </div>
              <div class="line"></div>

        </div>
    )
  }
}

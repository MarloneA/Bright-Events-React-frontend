import React, {Component} from 'react';
import Event from './Event';

export default class Events extends Component {

  constructor(){
      super();
      this.state = {

        events: [
          {
            id: 1123453,
            title:"The great Gatsby",
            date:"Event on 12/04/2018",
            description:"This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            created:" Created on 05/03/2018"
          },
          {
            id: 1123675,
            title:"Rick and Morty",
            date:"Event on 12/04/2018",
            description:"This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            created:" Created on 27/03/2018"
          },
          {
            id: 1123756,
            title:"Raiders of the Lost Arc",
            date:"Event on 12/04/2018",
            description:"This project is broken down into 4 challenges whose completion would contribute greatly to your learning towards becoming a full-stack developer. Upon completion, you would have built a world-class full-stack (frontend and backend) Python and JavaScript application. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
            created:" Created on 27/03/2018"
          }
        ]
    };
  }

  render(){
    const { events } = this.state;

    const Content = events.map((event) => {
      return <Event key={event.id} {...event}/>;
    });


    return (
        <div className="custom-main-content">
          <div>{Content}</div>
          <div className="line"></div>
        </div>
    )
  }
}

import React, {Component} from 'react';

export default class CreateEvent extends Component {


  render(){
    return (
      <form className="form-horizontal custom-create-events" action="/action_page.php">
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="title">Title:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control custom-create-event-input" id="title" placeholder="Enter Title"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="date">Date:</label>
          <div className="col-sm-10">
            <input type="date" className="form-control custom-create-event-input" id="date" placeholder="Enter event date"/>
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="venue">Venue:</label>
          <div className="col-sm-10">
            <input type="text" className="form-control custom-create-event-input" id="venue" placeholder="Where will you event be held at?"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlhtmlFor="category" className="control-label custom-ce-label">Category:</label>
          <select className="form-control category-styling custom-ce-label">
            <option>...</option>
            <option>Dance</option>
            <option>Rap</option>
            <option>Flamenco</option>
            <option>Phrygian</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlhtmlFor="location" className="control-label custom-ce-label">Location:</label>
          <select className="form-control location-styling custom-ce-label">
            <option>...</option>
            <option>Spain</option>
            <option>Morroco</option>
            <option>Abuja</option>
            <option>Tunis</option>
          </select>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">Description:</label>
          <textarea className="col-sm-10 custom-create-event-textarea" rows="10">
            Tell us a bit about your event ...
          </textarea>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default custom-btn">Create Event</button>
          </div>
        </div>
      </form>
    )
  }
}

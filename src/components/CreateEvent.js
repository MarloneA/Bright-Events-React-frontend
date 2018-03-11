import React, {Component} from 'react';

export default class CreateEvent extends Component {


  render(){
    return (
      <form class="form-horizontal custom-create-events" action="/action_page.php">
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Title:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control custom-create-event-input" id="email" placeholder="Enter Title"/>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Date:</label>
          <div class="col-sm-10">
            <input type="date" class="form-control custom-create-event-input" id="email" placeholder="Enter event date"/>
          </div>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Venue:</label>
          <div class="col-sm-10">
            <input type="email" class="form-control custom-create-event-input" id="email" placeholder="Where will you event be held at?"/>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category" className="control-label custom-ce-label">Category:</label>
          <select className="form-control category-styling custom-ce-label">
            <option>...</option>
            <option>Dance</option>
            <option>Rap</option>
            <option>Flamenco</option>
            <option>Phrygian</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="control-label custom-ce-label">Location:</label>
          <select className="form-control location-styling custom-ce-label">
            <option>...</option>
            <option>Spain</option>
            <option>Morroco</option>
            <option>Abuja</option>
            <option>Tunis</option>
          </select>
        </div>

        <div class="form-group">
          <label class="control-label col-sm-2" for="email">Description:</label>
          <textarea class="col-sm-10 custom-create-event-textarea" rows="10">
            Tell us a bit about your event ...
          </textarea>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button type="submit" class="btn btn-default custom-btn">Create Event</button>
          </div>
        </div>
      </form>
    )
  }
}

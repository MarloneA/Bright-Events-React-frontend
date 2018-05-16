import React, {Component} from 'react'
import logo from '../assets/images/bevlogo.png'

export default class Sidebar extends Component {
  render () {
    return (
      <nav id="sidebar" className="nav-sidebar-style custom-nav-bar">
        <div className="sidebar-header custom-sidebar-header">
          {/* <img className="mb-4" src={ logo } alt="" width="40" height="40"/> */}
          <h3 className="sidebar-header-h3 custom-sidebar-h3">Bright Events</h3>
        </div>
        <h3 className="sidebar-header-share custom-sidebar-header-share">Connect Share Inspire</h3>
        <form>
          <input aria-label="Search" className="form-control mr-sm-2 search-input custom-search-input cs-subscrib" placeholder="Search" type="text"/>
          <span className="search icon"></span>
        </form>
        <div className="form-group custom-form-group">
          <label htmlFor="category" className="style-label-category custom-filter-label-category">Filter by Category</label>
          <select className="form-control category-styling cs-subscrib" id="category">
            <option>...</option>
            <option>Workshops</option>
            <option>Science & Tech</option>
            <option>Networking</option>
            <option>Seminar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="style-label-location custom-filter-label-location">Filter by location</label>
          <select className="form-control location-styling cs-subscrib" id="location">
            <option>...</option>
            <option>Spain</option>
            <option>Morroco</option>
            <option>Abuja</option>
            <option>Tunis</option>
          </select>
        </div>
        <div className="cs-promo">
          {/*<p>Want to be informed of the best events in your inbox? Then subscribe to our monthly newsletter! We promise we will not spam you</p>*/}

            <p id="fp">All the best events in one place. You could also be a host. create an event today:</p>

            <button className="custom-btn btn btn-default btn-lg cs-subscribe"><a href="/create-event">Create Event</a></button>
        </div>
      </nav>
    )
  }
}

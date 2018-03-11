import React, {Component} from 'react';

export default class Sidebar extends Component {

  render(){
    return (
      <nav id="sidebar" className="nav-sidebar-style custom-nav-bar">
        <div className="sidebar-header custom-sidebar-header">
          <h3 className="sidebar-header-h3 custom-sidebar-h3">Bright Events</h3>
        </div>
        <h3 className="sidebar-header-share custom-sidebar-header-share">Connect Share Inspire</h3>
        <form>
          <input aria-label="Search" className="form-control mr-sm-2 search-input custom-search-input" placeholder="Search" type="text"/>
        </form>
        <div className="form-group custom-form-group">
          <label htmlFor="category" className="style-label-category custom-filter-label-category">Filter by Category</label> <select className="form-control category-styling" id="category">
            <option>Dance</option>
            <option>Rap</option>
            <option>Flamenco</option>
            <option>Phrygian</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="style-label-location custom-filter-label-location">Filter by location</label> <select className="form-control location-styling" id="location">
            <option>Spain</option>
            <option>Morroco</option>
            <option>Abuja</option>
            <option>Tunis</option>
          </select>
        </div>
      </nav>
    )
  }
}

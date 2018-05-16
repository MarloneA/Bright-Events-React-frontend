import React, { Component } from 'react'
import { authHeader } from '../helpers/auth_header'
import { history } from '../helpers'
import { dispatch } from 'redux'

export default class CreateEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      category: '',
      location: '',
      description: '',
      date: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit (e) {
    e.preventDefault()
    const post = {
      title: this.state.title,
      location: this.state.location,
      category: this.state.category,
      description: this.state.description,
      date_of_event: this.state.date
    }

    fetch('https://andela-brightevents.herokuapp.com/api/v2/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'token': authHeader()['token']
      },
      body: JSON.stringify(post)
    }).then(
      res => {
        return res.json()
      }
    ).then(
      data => {
        history.push(`/events/${data.event.id}`)
      }
    )
  }

  render () {
    return (
      <form className="form-horizontal custom-create-events" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="title">Title:</label>
          <div className="col-sm-10">
            <input type="text" name="title" value={this.state.title} onChange={this.onChange} className="form-control custom-create-event-input" id="title" placeholder="Enter Title"/>
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="date">Date:</label>
          <div className="col-sm-10">
            <input type="date" name="date" value={this.state.date} onChange={this.onChange} className="form-control custom-create-event-input" id="date" placeholder="Enter event date"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="category" className="control-label custom-ce-label">Category:</label>
          <select name="category" value={this.state.category} onChange={this.onChange} className="form-control category-styling custom-ce-label">
            <option>...</option>
            <option>Workshops</option>
            <option>Science & Tech</option>
            <option>Networking</option>
            <option>Seminar</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="location" className="control-label custom-ce-label">Location:</label>
          <select name="location" value={this.state.location} onChange={this.onChange} className="form-control location-styling custom-ce-label">
            <option>...</option>
            <option>Nairobi</option>
            <option>Mombasa</option>
            <option>Nakuru</option>
            <option>Kisumu</option>
          </select>
        </div>

        <div className="form-group">
          <label className="control-label col-sm-2" htmlFor="email">Description:</label>
          <textarea name="description" value={this.state.description} onChange={this.onChange} className="col-sm-10 custom-create-event-textarea" rows="10">
            Tell us a bit about your event ...
          </textarea>
        </div>

        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="submit" className="btn btn-default custom-btn">Update Event</button>
          </div>
        </div>
      </form>
    )
  }
}

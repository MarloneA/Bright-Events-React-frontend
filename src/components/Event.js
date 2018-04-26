import React, {Component} from 'react'

class Event extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {}
    }
  }
  componentWillMount () {
    let id = this.props.match.params.id
    fetch(`https://andela-brightevents.herokuapp.com/api/v2/events/${id}`).then(
      res => {
        return res.json()
      }
    ).then(
      data => {
        console.log(data.event)
          this.setState({event:data.event})
      }
    )
  }
  render () {
      const { title, location, category, description, date_of_event, doc, created_by } = this.state.event
    return (
      <main role="main" className="cs-main">
        <div className="container cs-evnt-card">

          <div className="row cs-img-desc">
            <div className="col-md-8 cs-img">

            </div>
            <div className="col-md-4 cs-detail">
              <p>Event on: { date_of_event}</p>
              <b>{title}</b>
              <p>{created_by}</p>
            </div>
          </div>

          <div className="row cs-desc">
            <div className="col-md-8 cs-desc-detail">
              <h3>DESCRIPTION</h3>
              <p>{ description }</p>
            </div>

            <div className="col-md-4 cs-desc-date">
              <h4>Date</h4>
              <p>{ date_of_event }</p>
              <h4>Category</h4>
              <p>{ category }</p>
              <h4>Location</h4>
              <p>{ location }</p>
              <a href="#">View on map</a>
            </div>

          </div>

          <div className="row">
            <div className="col-md-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15955.652906733938!2d36.88421685!3d-1.2204388999999998!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2ske!4v1524730462634"
                width="1080" height="390" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
        <p className="login-navigate"><a href="/"> Go back to the Mainpage <span className="arrow-right icon"/></a></p>
      </main>
    )
  }
}

export default Event

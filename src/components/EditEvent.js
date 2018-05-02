import React, {Component} from 'react'
import {authHeader} from '../helpers/auth_header'
import { Link } from 'react-router-dom'

export default class EditEvent extends Component {
  constructor (props) {
    super(props)
    this.state = {
      event: {}
    }

    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    fetch()
  }
  render () {
    return (
      <div>
        {/* <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Delete</button> */}
        <button onClick={this.handleClick} className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>

        <div aria-hidden="true" aria-labelledby="myModalLabel" className="modal fade" id="myModal" role="dialog" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">

              <div className="modal-header">
                <h4 className=" modal-heading modal-title color" id="myModalLabel">Edit event</h4>
              </div>

              <div className="modal-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input className="form-control" id="inputText" placeholder="Title" type="text"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input className="form-control" id="inputText" placeholder="Date" type="date"/>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="col-sm-12">
                      <input className="form-control" id="inputText" placeholder="Category" type="text"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-12">
                      <input className="form-control" id="inputText" placeholder="Location" type="text"/>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea className="txt-ar form-control" id="describe" rows="12">Event description</textarea>
                  </div>
                </form>
              </div>

              <div className="modal-footer">
                <button className="btn btn-default custom-modal-close-btn" data-dismiss="modal" type="button">Close</button> <button className="btn btn-primary custom-modal-save-btn" type="button">Save changes</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    )
  }
}

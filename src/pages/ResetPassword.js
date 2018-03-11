import React, {Component} from 'react';

export default class ResetPassword extends Component {

  render(){
    return (
      <form className="reset-password-form">
        <div class="form-group">
          <label className="label" for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control custom-form-input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
        </div>
        <div class="form-group">
          <label className="label" for="exampleInputPassword1">Old Password</label>
          <input type="password" class="form-control custom-form-input" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label className="label" for="exampleInputPassword1">New Password</label>
          <input type="password" class="form-control custom-form-input" id="exampleInputPassword1" placeholder="Password"/>
        </div>

        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    )
  }
}

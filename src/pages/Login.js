import React, {Component} from 'react'
import { connect } from 'react-redux'
import logo from '../assets/images/bevlogo.png'
import { userActions } from '../actions'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: {
        email: '',
        password: ''
      },
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (e) {
    // const { name, value } = e.target
    // this.setState({ [name]: value })
    const { name, value } = e.target
    const { user } = this.state
    this.setState({
      user: {
        ...user,
        [name]: value
      }
    })
    this.setState({ [name]: value })
  }

  handleSubmit (e) {
    e.preventDefault()

    this.setState({ submitted: true })

    const { user } = this.state
    const { dispatch } = this.props

    if (user.email && user.password) {
      dispatch(userActions.login(user))
    }
  }

  render () {
    const { loggingIn } = this.props
    const { user, submitted } = this.state
    return (
      <form onSubmit={this.handleSubmit} className="form-signin">
        <div className="text-center mb-4">
          <img className="mb-4" src={logo} alt="bev logo" width="72" height="72"/>
          <h1 className="h3 mb-3 font-weight-normal" id="ghostwhite">Sign In</h1>
        </div>

        <div className="form-label-group">
          <input onChange={this.handleChange} name='email' value={user.email} type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
          <label htmlFor="inputEmail">Email address</label>
        </div>

        <div className="form-label-group">
          <input onChange={this.handleChange} name='password' value={user.password} type="password" id="inputPassword" className="form-control" placeholder="Password" required autoFocus/>
          <label htmlFor="inputPassword">Password</label>
        </div>

        <div className="checkbox mb-3" id="ghostwhite">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        { loggingIn }
        <p className="login-navigate"><a href="/register">New User? Register</a></p>
        <p className="login-navigate password"><a href="/reset-password">Forgot password?</a></p>
        {/*<p className="login-navigate"><a href="/">Mainpage <span className="arrow-right icon"></span></a></p>*/}

      </form>

    )
  }
}

function mapStateToProps (state) {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const connectedLoginPage = connect(mapStateToProps)(Login)
export { connectedLoginPage as Login }

import React, {Component} from 'react'
import { history } from '../helpers'

export default class Logout extends Component {
  constructor (props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (e) {
    e.preventDefault()
    localStorage.removeItem('user')
    history.push('/login')
  }

  render () {
    return (
      <input onClick={this.handleClick} type="button" value="Logout" className="nav-item nav-link pad cs-logout">
      </input>
    )
  }
}

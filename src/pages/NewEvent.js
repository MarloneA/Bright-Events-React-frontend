import React, {Component} from 'react'

import Sidebar from '../components/Sidebar'
import Head from '../components/Head'
import CreateEvent from '../components/CreateEvent'

export default class NewEvent extends Component {
  render () {
    return (
      <div className="outline">
        <Head/>
        <Sidebar/>
        <CreateEvent/>
      </div>
    )
  }
}

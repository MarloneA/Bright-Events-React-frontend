import React, {Component} from 'react'
import EditEvent from '../components/EditEvent'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

class Edit extends Component {
  render () {
    return (
      <div className="outline">
        <Sidebar/>
        <Head/>
        <EditEvent/>
        <Footer/>
      </div>
    )
  }
}

export default Edit

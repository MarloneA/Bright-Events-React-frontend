import React, {Component} from 'react'
import ManageMyEvents from '../components/ManageEvents'
import Head from '../components/Head'
import Sidebar from '../components/Sidebar'
import Footer from '../components/Footer'

class Manage extends Component {
  render () {
    return (
      <div className="outline">
        <Sidebar/>
        <Head/>
        <ManageMyEvents/>
        <Footer/>
      </div>
    )
  }
}

export default Manage

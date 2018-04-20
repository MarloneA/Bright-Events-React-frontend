import React, {Component} from 'react'

import Pagination from './Pagination'

export default class Footer extends Component {
  render () {
    return (
      <footer className="footer-custom">
        <Pagination/>
        <p id="float-footer">Copyright 2018 Bev</p>
      </footer>
    )
  }
}

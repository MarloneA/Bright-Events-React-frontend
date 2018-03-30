import React, {Component} from 'react';

export default class Pagination extends Component {

  render(){

    return (
      <nav aria-label="Page navigation example">
        <ul className="pagination custom-pagination">
          <li className="page-item"><a className="page-link" href="event">Previous</a></li>
          <li className="page-item"><a className="page-link" href="event">1</a></li>
          <li className="page-item"><a className="page-link" href="event">2</a></li>
          <li className="page-item"><a className="page-link" href="event">3</a></li>
          <li className="page-item"><a className="page-link" href="event">Next</a></li>
        </ul>
      </nav>
    )
  }
}

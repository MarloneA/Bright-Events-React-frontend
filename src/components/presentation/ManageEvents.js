import React, {Component} from "react"
import { Link } from "react-router-dom"
import DeletePopup from "./DeletePopup"
import Head from "./Head";

class ManageMyEvents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:''
        }
        this.deleteClicked = this.deleteClicked.bind(this)
    }

    onDelete = (id) => {
        console.log("the command center says", id)
        this.props.deleteEvent(id)
    }

    componentDidMount() {
		this.props.fetchMyEvents()
    }

    deleteClicked(id){
        console.log("the event to be deleted is ", id)
        this.setState({
            id:id
        })
    }

    render () {
		const { events } = this.props
		const content = events.map(
			event => (
				<div className="cs-card" key={event.id}>


					<Link to={`/edit-events/${event.id}`} className="custom-btn edit btn btn-sm" >Edit</Link>
                    <button onClick={()=>this.deleteClicked(event.id)}  type="button" className="custom-btn edit btn btn-danger btn-sm" data-toggle="modal" data-target="#delmodal">
                        Delete
                    </button>
					<div className="row">
						<div className="col-md-3">
							<div className="cs-cnt-img">

							</div>
						</div>
						<div className="cs-cnt-content col-md-9">
							<h4>{event.title}</h4>
							<p>{event.description.slice(0,200)+" ..."}</p>
							<h6>{`Category: ${event.category}`}</h6>
							<h6>{`Location: ${event.location}`}</h6>
							<h6>{"Date: " + event.date_of_event}</h6>
							<h6 className="cs-guest cs-rsvd"><Link to={`/api/v2/event/${event.id}/rsvp`}>View guest List</Link></h6>
						</div>
					</div>
				</div>
			)
		)
		return (
			<div>
				<Head/>
                <DeletePopup onDelete={this.onDelete} id={this.state.id}/>
                <div id="custom-main-content">
                    {content}
                    <hr/>
                </div>
			</div>

		)
	}
}

export default ManageMyEvents

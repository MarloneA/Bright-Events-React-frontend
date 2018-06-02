import React, {Component} from "react"
import DeleteComponent from "./DeleteEvent"

class DeletePopup extends Component {
	render() {
		let id = this.props.id
		return (
			<div className="container">
				<button type="button" className="custom-btn edit btn btn-danger btn-sm" data-toggle="modal" data-target="#myModal">
                    Delete
				</button>


				<div className="modal fade" id="myModal">
					<div className="modal-dialog">
						<div className="modal-content">


							<div className="modal-header">
								<h4 className="modal-title">Confirm delete</h4>
								<button type="button" className="close" data-dismiss="modal">&times;</button>
							</div>

							<div className="modal-body">
                                Are you sure you want to delete this event, note that deleting
                                this event is an irreversible action, you may lose all your data
							</div>



							<div className="modal-footer">
								<DeleteComponent id={id}/>
								<button type="button" className="btn btn-sm" data-dismiss="modal">Cancel</button>
							</div>

						</div>
					</div>
				</div>

			</div>
		)
	}
}

export default DeletePopup

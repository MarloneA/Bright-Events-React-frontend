import React, {Component} from "react"

class DeletePopup extends Component {
	onDelete = () => {
	    console.log("I have been triggered")
		this.props.onDelete(this.props.id)
	};
	render() {
		return (
			<div className="container">
				<button type="button" className="custom-btn edit btn btn-danger btn-sm" data-toggle="modal" data-target="#delmodal">
                    Delete
				</button>


				<div className="modal fade" id="delmodal">
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
                                <button onClick={this.onDelete} className="custom-btn cs-del-modal edit btn btn-danger btn-sm" data-dismiss="modal">Delete</button>
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

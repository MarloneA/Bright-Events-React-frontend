import React, {Component} from 'react';

export default class EditEvent extends Component {
  render() {
    return (

      <div>
        <button className="custom-btn edit btn btn-sm" data-target="#myModal" data-toggle="modal">Edit</button>
				<div aria-hidden="true" aria-labelledby="myModalLabel" class="modal fade" id="myModal" role="dialog" tabindex="-1">
					<div class="modal-dialog">
						<div class="modal-content">

							<div class="modal-header">
								<h4 class=" modal-heading modal-title color" id="myModalLabel">Edit event</h4>
							</div>

							<div class="modal-body">
								<form class="form-horizontal" role="form">
									<div class="form-group">
										<div class="col-sm-12">
											<input class="form-control" id="inputText" placeholder="Title" type="text"/>
										</div>
									</div>
                  <div class="form-group">
										<div class="col-sm-12">
											<input class="form-control" id="inputText" placeholder="Date" type="date"/>
										</div>
									</div>

									<div class="form-group">
										<div class="col-sm-12">
											<input class="form-control" id="inputText" placeholder="Category" type="text"/>
										</div>
									</div>
									<div class="form-group">
										<div class="col-sm-12">
											<input class="form-control" id="inputText" placeholder="Location" type="text"/>
										</div>
									</div>
									<div class="form-group">
										<textarea class="txt-ar form-control" id="describe" rows="12">Event description</textarea>
									</div>
								</form>
							</div>


							<div class="modal-footer">
								<button class="btn btn-default custom-modal-close-btn" data-dismiss="modal" type="button">Close</button> <button class="btn btn-primary custom-modal-save-btn" type="button">Save changes</button>
							</div>
						</div>

					</div>
				</div>

      </div>
    );
  }
}

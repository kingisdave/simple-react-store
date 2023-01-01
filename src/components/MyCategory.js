import React, { Component } from 'react';

class MyCategory extends Component {
	render() {
		return (
			<div className="container-fluid">
				<div className="row">
				{/* this.state.newCategory.map((c, i) => (
				<div className="col-md-4 col-sm-6" key={i}>
					<div className="card border-none shadow mt-2 routeCard">
						<div className="card-body">
							<h5>{c.catname}
								<span className="fa fa-trash float-right" onClick={() => this.deleteItem(i) }></span>
							</h5>
						</div>
					</div>
				</div>
				)) */}
				</div>
			</div>
		);
	}
}

export default MyCategory;
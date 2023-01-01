import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import NavbarIn from './NavbarIn';

class UserDashboard extends Component {

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col-sm-3 col-md-2 mx-auto bg-secondary sidenav">
							<ul className="nav nav-pills flex-column">
								<li className="nav-item m-4" data-toggle="pill">
									<i className="fa fa-user">
									<span className="ml-2">Profile</span></i>
								</li>
								<li className="nav-item m-4">
									<i className="fa fa-luggage-cart"><span className="ml-2">Products</span></i>
								</li>
								<li className="nav-item m-4" data-toggle="pill">
									<i className="fa fa-pager"><span className="ml-2">Categories</span></i>
								</li>
								<li className="nav-item m-4" data-toggle="pill">
									<i className="fa fa-users"><span className="ml-2">Users</span></i>
								</li>
								<li className="nav-item m-4" data-toggle="pill">
									<i className="fa fa-tools"><span className="ml-2">Settings</span></i>
								</li>
								<li className="nav-item m-4" data-toggle="pill">
									<Link to="/login"><i className="fa fa-sign-out-alt"><span className="ml-2">Sign Out</span></i></Link>
								</li>
							</ul>
						</div>
						<div className="col-md-9">
							<div className="card shadow">
								<div className="card-header">
									<h4>Update Profile</h4>
								</div>
								<div className="card-body">
									<form className="form">
										<div className="form-group">
											<label>Full Name</label>
											<input type="text" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Email</label>
											<input type="email" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Phone</label>
											<input type="email" className="form-control"/>
										</div>
										<div className="form-group">
											<label>Address</label>
											<input type="text" className="form-control"/>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>	
		);
	}
}

export default UserDashboard;
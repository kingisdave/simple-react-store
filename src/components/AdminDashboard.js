import React, { Component } from 'react';
import NavbarIn from './NavbarIn';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Products from  './AddProduct';
import AddCategory from './AddCategory';
import UpdateProfile from './UpdateProfile';
// import Profile from './Profile';
import Setting from './Setting';
 
class AdminDashboard extends Component {
	render() {
		return (
			<React.Fragment>
				<Router>
					<div>
						<NavbarIn />
						<div className="container-fluid">
							<div className="row">
								<div className="col-sm-3 col-md-2 mx-auto bg-secondary sidenav">
									<ul className="nav nav-pills flex-column">
										<li className="nav-item m-4" data-toggle="pill">
											<i className="fa fa-user">
											<span className="ml-2 text-white shadow-lg">Profile</span></i>
										</li>
										<li className="nav-item m-4" data-toggle="pill">
											<Link to={`/dashboard/products`} className="text-white shadow-lg"><i className="fa fa-luggage-cart"><span className="ml-2">Products</span></i></Link>
										</li>
										<li className="nav-item m-4" data-toggle="pill">
											<Link to={`/dashboard/category`} className="text-white shadow-lg"><i className="fa fa-pager"><span className="ml-2">Categories</span></i></Link>
										</li>
										<li className="nav-item m-4" data-toggle="pill">
											<Link to={`/dashboard/profile`} className="text-white shadow-lg"><i className="fa fa-users"><span className="ml-2">Users</span></i></Link>
										</li>
										<li className="nav-item m-4" data-toggle="pill">
											<Link to={`/dashboard/setting`} className="text-white shadow-lg"><i className="fa fa-tools"><span className="ml-2">Settings</span></i></Link>
										</li>
										<li className="nav-item m-4" data-toggle="pill">
											<Link to={`/dashboard/login`} className="text-white shadow-lg"><i className="fa fa-sign-out-alt"><span className="ml-2">Sign Out</span></i></Link>
										</li>
									</ul>
								</div>
								<div className="col-sm-9 col-md-10">
									<Switch>	
							           	<Route path={`/dashboard/profile`} component={ UpdateProfile } />
						 		        <Route path={`/dashboard/products`} component={ Products } />
						 		        <Route path={`/dashboard/category`} component={ AddCategory } />
						 		        <Route path={`/dashboard/setting`} component={ Setting } />
					        		</Switch>
								</div>
							</div>
						</div>
					</div>
				</Router>
			</React.Fragment>
		);
	}
}

export default AdminDashboard

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/item.css';
 
class NavbarIn extends Component {
 	render() {
 		return (
 			<React.Fragment>
 				<nav className="navbar bg-dark text-white">
 					<a className="navbar-brand" href="#">React Shop</a>
 					<ul className="navbar-nav">
 						<li className="nav-item">
 							<Link to="/dashboard"><span className="fa fa-user"></span></Link>
 						</li>
 					</ul>
 				</nav>
 			</React.Fragment>
 		);
 	}
}

export default NavbarIn; 
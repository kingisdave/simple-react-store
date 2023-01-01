import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	// state={ }

	// deleteOne = (details) => {
	// 	console.log(details);
	// }

	render() {
		return (
			<nav className="navbar bg-light sticky-top text-dark toppy">
				<Link to="/" >React Shop</Link>
				<ul className="navbar nav">
					<li className="nav-item">
						<Link to='/login'>Login</Link>
					</li>
					<li className="nav-item">
						<Link to='/register'>Register</Link>
					</li>
				</ul>
				<Link to={{pathname:'/cart', 
						state:{
							mycart: this.props.newcart
						}
						 }} className="btn btn-sm butn">
					View Cart <span className={this.getBadgeClasses()}>{this.props.newcart.length}</span>
				</Link>
			</nav>
		);
	}
	getBadgeClasses() {
		let classes = "badge m-1 badge-";
		classes += this.props.newcart === '0' ? "danger" : "primary";
		return classes;
	}
}

export default Navbar;
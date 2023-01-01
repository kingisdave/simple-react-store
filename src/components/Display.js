import React, { Component } from 'react';
import './assets/home.css';

class Display extends Component {
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid" id='disp'>
                    <div className="row">
                        <div className="col-12 text-center text-white mt-5">
                            <h1>REACT STORE</h1>
                            <h3>Clothes, Shoes, bags</h3>
                            <h4>Phones and Laptops</h4>
                            <button type="button" className="butn" id="shop">Shop Now</button>
                        </div>
                    </div>
                </div>
			</React.Fragment>
		);
	}
}
export default Display;
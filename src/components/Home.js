import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Display from './Display';
import Categories from './Categories';

class Home extends Component {

	state = { 
		cart: []
	}

	addtoCart=(details)=>{
		this.setState({
		 	cart:[...this.state.cart, details]
		})
	}	
	
	componentDidMount = () => {
		axios.get('/products.php')
			.then(res => {
				console.log(res);
				// this.setState({

				// })
		})
	}
  

	render() {
		return (
			<React.Fragment>
				<Navbar newcart={this.state.cart}/>
				<Display />
				<Categories onAddCart={this.addtoCart} />
			</React.Fragment>
		);
	}
}

export default Home;
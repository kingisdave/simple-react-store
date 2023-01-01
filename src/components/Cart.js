import React, { Component } from 'react';
import Navbar from './Navbar';
import './assets/item.css';

class Cart extends Component  {
	state= {
		mycart : this.props.location.state.mycart
	}  
	// componentDidMount =()=>{
		// console.log('welcome');
		// console.log(this.props.location.state.mycart)
	// }

handleDelOne=(index)=>{
	let newCart = this.state.mycart.filter((c, ind)=> ind!==index);
	this.setState({mycart:newCart});
}

	render() {
		// console.log('hello');
		return (
			<React.Fragment>
				<Navbar newcart={this.state.mycart}/>
				<div className="container-fluid text-center">
					<div className="row">
						<div className="col-12">
							<h3>Cart Here</h3>
							{ (this.state.mycart.length > 0) ? (
						<table className="table table-striped border-0">
							<thead>
								<tr>
									<th>ITEM</th>
									<th>NAME</th>
									<th>PRICE</th>
									<th>OPERATION</th>
								</tr>
							</thead>
								{ this.state.mycart.map((detail, index) =>
								 	{
								 	return(
								 		<tbody key={index}>
								 			<tr className="shadow mb-2">
								 				<td><img className="thumbnail" src={ require(`./assets/images/${detail.img}`) } alt={ detail.productName }/></td>
								 				<td className="h5 text-center">{detail.productName}</td>
								 				<td className="h5 text-center">{detail.price}</td>
								 				<td><button type="button" className="fa fa-trash ftext-center" onClick={() => this.handleDelOne(index)} >Refresh</button></td>
								 			</tr>
								 		</tbody>
									 );
								})}
						</table>
						) : <div className="container-fluid">
									<div className="row">
										<div className="col-12">
											<span> No record Available</span>
										</div>
									</div>
								</div>
							}
						</div>
					</div>
				 </div>
			</React.Fragment>
		);
	}
}

export default Cart;
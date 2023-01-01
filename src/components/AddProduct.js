import React, { Component } from 'react';
import './assets/item.css';

class Product extends Component {
	state = {
		products:{},
		myCategory: []
	}

	componentDidMount() {
		fetch('/categoryLoad.php', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify(this.state.newCategory)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data) 
		let listCategory = data;
		this.setState({ myCategory: listCategory })	
		});
	}

	proChange = (e) =>{
		let products = this.state.products;
		products[e.target.name]= e.target.value;
		this.setState({ products });
	}

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<h1 className="text-center">Products</h1>
							<div className="card p-3 border-0 shadow">
								<div className="card-body mx-auto">
									<form className="form" onSubmit={this.proSubmit}>
										<div className="row">
											<div className="form-group col-xs-12 col-md-6">
												<label>Name</label>
												<input className="form-control"
													name="proname"
													placeholder="Product Name" 
													onChange={this.proChange} />
											</div>
											<div className="form-group col-xs-12 col-md-6">
												<label>Price</label>
												<input className="form-control m-1"
													name="proprice"
													placeholder="Your Price" 
													onChange={this.proChange} />
											</div>
											<div className="form-group col-xs-12 col-md-6">
												<label>Quantity</label>
												<input className="form-control m-1"
													name="proquantity"
													placeholder="Your Quantity" 
													onChange={this.proChange} />
											</div>
											<div className="form-group col-xs-12 col-md-6">
												<label>Category</label>
												<select className="form-control m-1"
													name="procat"
													value={this.props.mycat}
													placeholder="Category" 
													onChange={this.proChange}>
													<option>Choose Category</option>
												</select>
											</div>
											<div className="form-group ml-2">
												<textarea className="form-control"
													name="prodescriptn"
													placeholder="Description" 
													onChange={this.proChange} >
												</textarea>
											</div>

										
										{/*<input className="form-control mr-1"
											name="procat"
											placeholder="Category" 
											onChange={this.proChange} />*/}
										</div>
										<button type="submit" className="btn btn-success pull-right">Add to List</button>
									</form>
								</div>
							</div>
							
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
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Product;
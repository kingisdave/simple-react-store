import React, { Component } from 'react';
import axios from 'axios';

class AddCategory extends Component {

	constructor(props) {
		super(props);
		this.state = {
			catsuccess: "",
			newcategory: {},
			myCategory: []
		}
	}
	
	catChange = (e) => {
		let newcategory = this.state.newcategory;
		newcategory[e.target.name]= e.target.value;
		this.setState({ newcategory });
		// this.setState({ [e.target.name]: e.target.value });
	}

	catSubmit = (e) => {
		e.preventDefault();
	
		axios.post('/categoryprocess.php', this.state.newcategory)
			.then(res => {
				if (res.data === "success") {
					let catsuccess = "Category added successfully";
					this.setState({ catsuccess });
				}
		});

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
		let listCategory = data;
		this.setState({ myCategory: listCategory })	
		});
		// this.props.myCat(this.)
	}
		
	handleDelete =(itemIndex) => {
		let newlist = this.state.myCategory.filter((item, ind) => ind !== itemIndex);
	 	this.setState({
	 		myCategory: newlist
	 	})
	}

	
	
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
					<div className="row">
						<div className="col mx-auto">
							<h1 className="text-center">Category</h1>
							<div className="card border-0 shadow routeCard">
								<div className="card-body mx-auto">
									<form className="form-inline" onSubmit={this.catSubmit}>
										<div className="form-group">
										<input className="form-control mr-4" 
											name="catname" 
											// value={this.state.catname} 
											placeholder="Insert  Category" 
											onChange={this.catChange} />
										</div>
										<button type="submit" className="btn btn-success ml-3">Add to List</button>
									</form>
									<small className="text-success">{this.state.catsuccess}</small>
								</div>
							</div>
							<div className="row">
								{this.state.myCategory.map((c, i) => (
								<div className="col-md-3 col-sm-4 col-xs-6" key={i}>
									<div className="card border-none shadow mt-2">
										<div className="card-body">
											<h5>{c.category_name}
												<span className="fa fa-trash float-right" onClick={this.handleDelete }></span>
											</h5>
										</div>
									</div>
								</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default AddCategory;
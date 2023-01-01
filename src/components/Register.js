import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { addUser } from '../actions/index';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import Input from './Input';

// function mapDispatchToProps(dispatch) {
// 	return {
// 		addUser: user => dispatch(addUser(user))
// 	}
// }
// const mapStateToProps = (state) => {
// 	return {
// 		user: state.users
// 	}
// }
const fields = [
	{ name: 'fname', type: 'text', placeholder: 'First Name' },
	{ name: 'eml', type: 'email', placeholder: 'Your Email' },
	{ name: 'adr', type: 'text', placeholder: 'Your Address' },
	{ name: 'pword', type: 'password', placeholder: 'Password' },
]

class Register extends Component {
	state={
		myprofile:{}
	}
  
	registerChange=(e)=> {
		let myprofile = this.state.myprofile;
		myprofile[e.target.name]= e.target.value;
		this.setState({ myprofile });
	}
	submitForm=(e)=>{
		e.preventDefault();
		console.log(this.state.myprofile);
		axios.post('/registerprocess.php', this.state.myprofile)
			.then(res => {
				console.log(res.data);
		})
		// console.log(this.state.myprofile);
	}

	render() {
		return (
			<React.Fragment>
				<div className="container-fluid reg">
					<div className="row">
						<div className="col-md-5 col-sm-6 mx-auto mt-3">
							<div className="card shadow text-center">
								<h4>Register Here</h4>
								<div className="card-body">
									<form className="form" onSubmit={ this.submitForm }>
									{
										fields.map((f, i) => (
											<Input key={ i }
												{...f}
												my={this.registerChange}
												onChange={this.props.handleChange }
												onBlur={this.props.handleBlur }
												touched={this.props.touched[f.name] }
												errors={this.props.errors[f.name] }
											/>
										))
									}
									{/*	<div className="form-group col">
											<label> Full Name: </label>
											<input type="text" name="fname" placeholder="Full Name..." className="form-control" onChange={this.registerChange}/>
										</div>
										<div className="form-group">
											<label> Email: </label>
											<input type="email" name="eml" placeholder="Your Email..." className="form-control" onChange={this.registerChange}/>
										</div>
										<div className="form-group">
										<label>Address: </label>
											<textarea type="text" name="adr" placeholder="Your Address..." className="form-control" onChange={this.registerChange}></textarea>
										</div>
										<div className="form-group">
											<label> Password: </label>
											<input type="password" name="pword" placeholder="Your Password..." className="form-control" onChange={this.registerChange} />
										</div>
										<button type="submit" className="btn btn-info form-control">Register</button>
									</form>
									<form onSubmit={ e => {
									 	e.preventDefault();
									 	console.log(this.props)
									 	}} 
									 	className="mx-auto"
									>*/}
										<div className="form-group">
										{(this.props.dirty ) ? (
											<button type="submit" className="btn btn-block btn-success">Register</button>
											) : (
											<button type="submit" className="btn btn-block btn-success" disabled>Register</button>
											)
										}
											<p className="small">Are you a registered user? <Link to="/Login">Login here</Link></p>											
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
export default (
	withFormik({
		mapPropsToValues: () => ({
			fname: "",
			eml: "",
			adr: "",
			pword: ""
		}),
		validationSchema: Yup.object().shape({
			fname: Yup.string().required("Fullname is required"),
			eml: Yup.string().required("Email is required"),
			adr: Yup.string().required("Address is required"),
			pword: Yup.string().required("Password is required"),
		})
	})(Register)
);
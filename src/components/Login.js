import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { addItem } from '../actions/index';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import * as Yup from 'yup';
import { withFormik } from 'formik';
import Input from './Input';
// import AdminDashboard from './AdminDashboard';
// import UserDashboard from './UserDashboard';
// import { withRouter} from 'react-router-dom';

const fields = [
	{ name: 'email', type: 'email', placeholder: 'Email' },
	{ name: 'pass', type: 'password', placeholder: 'Password' }
]

class Login extends Component {
	state={
		logprofile:{},
		fireRedirect: false
	}

	loginChange=(e)=> {
		let logprofile = this.state.logprofile;
		logprofile[e.target.name] = e.target.value;
		this.setState({ logprofile });
	}
	loginForm=(e)=>{
		e.preventDefault();
		console.log(this.props);
		if(this.state.logprofile.email && this.state.logprofile.pass) {
		let logForm = JSON.stringify(this.state.logprofile);
		 axios.post('/loginprocess.php', logForm)
			.then(res => {
				let verifyMessage;
				let myresult = res.data;
				// if(myresult === 'error' ) {
				// 	verifyMessage = this.logFail();
				// }
				// else {
				// 	sessionStorage.setItem("mydata", JSON.stringify(myresult));

				// 	this.setState({userProfile:myresult, fireRedirect: true });
				// 	verifyMessage = this.logSuccess();
				// 	console.log(this.state.userProfile.type);
				// }
				// this.setState({ verifyOutput: verifyMessage });
				if (myresult === "error") {
				alert('Something went wrong!!!');	
				} else if (myresult ==="notfound") {
					alert("Incorrect Login details");
				} else {
					// console.log(myresult);
					sessionStorage.setItem("mydata", JSON.stringify(myresult));
					
					this.setState({ userProfile: myresult, fireRedirect: true, verifyOutput: verifyMessage })					
				}
				// this.setState({ verifyOutput: verifyMessage });
				// if(myresult.success){

				// 	this.setState({ fireRedirect: true })
				// console.log(res);
			})
		}
	};
	logFail = () => {
		return (
			<div className="alert alert-danger">Incorrect Email or Password</div>
		);
	}
	logSuccess = () => {
		return (
			<div className="alert alert-success">Correct Email or Password</div>
		);
	}
	redirectFxn = () => {
		if(this.state.fireRedirect) {
			if(this.state.userProfile.type === 1) {
				return (
					<Redirect to={{
						pathname:'/dashboard', 
						state:{
							userProfile: this.state.userProfile} }}/>
				); 
			} else if(this.state.userProfile.type === 2) {
				return (
					<Redirect to={{
						pathname:'/user',
						state:{
							userProfile: this.state.userProfile} }}/>
				);	
			}
		}
	}
	render() {
		return (
			<React.Fragment>
				<div className="container-fluid">
				{ this.redirectFxn() }
					<div className="row">
						<div className="col-md-5 col-sm-6 mt-5 mx-auto">
							<div className="card pt-3 shadow">
								<h5 className="text-center">Login Here</h5>
								<div className="card-body">
									{ this.state.verifyOutput }
									<form className="form" onSubmit={this.loginForm}>
									{
										fields.map((f, i) =>(
											<Input 
												key={ i }
												{...f}
												onChange={this.props.handleChange}
												onBlur={this.props.handleBlur}
												touched={this.props.touched[f.name]}
												errors={this.props.errors[f.name]}									
											/>
										))
									}
										<div className="form-group">
										{(this.props.errors > 0) ? (
											<button type="submit" className="btn btn-block btn-success">Login</button>
											) : (
											<button type="submit" className="btn btn-block btn-success" disabled>Login</button>
											)
										}
											<p className="small">Not Registered? <Link to="/Register">Register here</Link></p>											
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

export default withFormik({
	mapPropsToValues: () => ({
		email: "",
		pass: ""
	}),
	validationSchema: Yup.object().shape({
		email: Yup.string().required("Email is required"),
		pass: Yup.string().required("Password is required")
	})
})(Login);
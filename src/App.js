import React from 'react';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Details from './components/Details';
import Register from './components/Register';
import Login from './components/Login';
import AdminDashboard from './components/AdminDashboard.js';
import UserDashboard from './components/UserDashboard.js';

import NotFound from './components/NotFound';
 
class App extends React.Component {

  render() {
    return (
    	<div> 
				<Router>
					<Switch>
						<Route exact path="/" component = { Home } />
						<Route path="/cart" component = { Cart } />
						<Route path="/details" component = { Details } />
						<Route path="/register" component = { Register } />
						<Route path="/login" component = { Login } />
						<Route path="/dashboard" component={ AdminDashboard } />
						<Route path="/user" component = { UserDashboard } />
						<Route path="*" component = { NotFound } />

					</Switch>
				</Router>
			</div>
    );
  }
}

export default App;

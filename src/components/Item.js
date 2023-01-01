import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './assets/item.css';

class Item extends Component {
	state = { }
	onAddCart=(details)=>{
		this.props.addtoCart(details);
	}
  showCart = (details) => {
    this.props.theInfo(details);
  }
	render() {
		let { details } = this.props;
		return(
			<React.Fragment>
				<div className="col-md-3 mb-3">
          <div className="card shadow">
          <Link to={`/details/${details.productName}` }>
            <span onClick={()=>this.showCart(details)}>
          	<img className="card-img-top img" src={ require(`./assets/images/${details.img}`) } alt="myimage" />
            <div className="card-body text-dark">
              <p className="float-left">{ details.productName }</p>
              <span className="float-right h5">{ details.price }</span>
            </div>
            </span>
          </Link>
            <button type="button" className="btn butn form-control" 
            	onClick={() => this.onAddCart(details) }>
            	Add to Cart
            </button>
          </div>
        </div>
			</React.Fragment>
		);
	}
}

export default Item;
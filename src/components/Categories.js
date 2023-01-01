import React, { Component } from 'react';
import Item from './Item';
class Categories extends Component {
  categories = [
    {
      name: "Clothes",
      products: [
        {id: 1, productName: 'Cloth1', price: '$45.99', img: 'cloth1.jpg'},
        {id: 2, productName: 'Cloth2', price: '$29.99', img: 'cloth2.jpg'},
        {id: 3, productName: 'Cloth3', price: '$35.99', img: 'cloth1.jpg'},
        {id: 4, productName: 'Cloth4', price: '$45.99', img: 'cloth2.jpg'},
        {id: 5, productName: 'Cloth5', price: '$34.99', img: 'cloth1.jpg'},
        {id: 6, productName: 'Cloth6', price: '$59.99', img: 'cloth2.jpg'},
        {id: 7, productName: 'Cloth7', price: '$35.99', img: 'cloth1.jpg'},
        {id: 8, productName: 'Cloth8', price: '$30.99', img: 'cloth2.jpg'},
      ]
    },
    {
      name: "Bags",
      products: [
        {id: 9, productName: 'Bag1', price: '$25.99', img: 'bag1.jpg'},
        {id: 10, productName: 'Bag2', price: '$35.99', img: 'bag2.jpg'},
        {id: 11, productName: 'Bag3', price: '$25.99', img: 'bag1.jpg'},
        {id: 12, productName: 'Bag4', price: '$45.99', img: 'bag2.jpg'},
        {id: 13, productName: 'Bag5', price: '$35.99', img: 'bag1.jpg'},
        {id: 14, productName: 'Bag6', price: '$20.99', img: 'bag2.jpg'},
        {id: 15, productName: 'Bag7', price: '$30.99', img: 'bag1.jpg'},
        {id: 16, productName: 'Bag8', price: '$35.99', img: 'bag2.jpg'},
      ]
    },
    {
      name: "Shoes",
      products: [
        {id: 17, productName: 'Shoe1', price: '$50.99', img: 'shoe1.jpg'},
        {id: 18, productName: 'Shoe2', price: '$80.99', img: 'shoe2.jpg'},
        {id: 19, productName: 'Shoe3', price: '$50.99', img: 'shoe1.jpg'},
        {id: 20, productName: 'Shoe4', price: '$60.99', img: 'shoe2.jpg'},
        {id: 21, productName: 'Shoe5', price: '$50.99', img: 'shoe1.jpg'},
        {id: 22, productName: 'Shoe6', price: '$80.99', img: 'shoe2.jpg'},
        {id: 23, productName: 'Shoe7', price: '$90.99', img: 'shoe1.jpg'},
        {id: 24, productName: 'Shoe8', price: '$70.99', img: 'shoe2.jpg'},
      ]
    },
    {
      name: "Phones",
      products: [
        {id: 25, productName: 'Phone1', price: '$215.99', img: 'phone1.jpg'},
        {id: 26, productName: 'Phone2', price: '$105.99', img: 'phone2.jpg'},
        {id: 27, productName: 'Phone3', price: '$125.99', img: 'phone1.jpg'},
        {id: 28, productName: 'Phone4', price: '$105.99', img: 'phone2.jpg'},
        {id: 29, productName: 'Phone5', price: '$110.99', img: 'phone1.jpg'},
        {id: 30, productName: 'Phone6', price: '$200.99', img: 'phone2.jpg'},
        {id: 31, productName: 'Phone7', price: '$122.99', img: 'phone1.jpg'},
        {id: 32, productName: 'Phone8', price: '$115.99', img: 'phone2.jpg'},
      ]
    },
    {
      name: "Laptop",
      products: [
        {id: 33, productName: 'Laptop1', price: '$505.99', img: 'laptop.jpg'},
        {id: 34, productName: 'Laptop2', price: '$205.99', img: 'laptop.jpg'},
        {id: 35, productName: 'Laptop3', price: '$105.99', img: 'laptop.jpg'},
        {id: 36, productName: 'Laptop4', price: '$355.99', img: 'laptop.jpg'},
        {id: 37, productName: 'Laptop5', price: '$300.99', img: 'laptop.jpg'},
        {id: 38, productName: 'Laptop6', price: '$200.99', img: 'laptop.jpg'},
        {id: 39, productName: 'Laptop7', price: '$505.99', img: 'laptop.jpg'},
        {id: 40, productName: 'Laptop8', price: '$805.99', img: 'laptop.jpg'},
      ]
    },
  ] 
  state = {
    categories: this.categories
  }
  addCart=(details)=>{
    this.props.onAddCart(details);
  }
  // showInfo=(details)=>{
  //   this.props.showCart(details);
  //   console.log(details);
  // }
  render() {
    return (
      <React.Fragment>
        <div className="Jumbotron">
          <h3 className="text-center">Categories</h3>
          <div className="row">
            <div className="col-12">
              { this.state.categories.map((category, index) => (
                  <div key= { index }>
                    <h3>{category.name}</h3>  
                      <div className="row">
                      { category.products.map((c, i) => (
                        <Item key = {i} details = { c } 
                          addtoCart={this.addCart} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Categories;
import React, { Component } from "react";
import { PRODUCTS_CREATE } from "../redux/actions";
import store from "../redux/store";

import { v4 as uuidv4 } from "uuid";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      product_name: "",
      seller_name: "",
      price: "",
      offer_amt: "",
      final_price: "",
    };
  }

  getStateFromRedux = () => {
    store.subscribe(() =>
      this.setState({
        data: store.getState().products.data,
      })
    );
  };

  componentDidMount() {
    this.getStateFromRedux();
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let payload = {
      id: uuidv4(),
      product_name: this.state.product_name,
      seller_name: this.state.seller_name,
      price: this.state.price,
      offer_amt: this.state.offer_amt,
      final_price: this.state.final_price,
    };

    store.dispatch({ type: PRODUCTS_CREATE, payload });

    this.setState({
      product_name: "",
      seller_name: "",
      price: "",
      offer_amt: "",
      final_price: "",
    });
  };
  render() {
    return (
      <div className="Products">
        <div className="inputForm-container">
          <form className="inputForm" onSubmit={this.handleSubmit}>
            <div className="inputForm-field">
              <label htmlFor="product_name">Product Name : </label>
              <input
                type="text"
                name="product_name"
                id="product_name"
                onChange={(e) =>
                  this.setState({ product_name: e.target.value })
                }
                value={this.state.product_name}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="seller_name">Seller Name : </label>
              <input
                type="text"
                name="seller_name"
                id="seller_name"
                onChange={(e) => this.setState({ seller_name: e.target.value })}
                value={this.state.seller_name}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="price">Price : </label>
              <input
                type="text"
                name="price"
                id="price"
                onChange={(e) => this.setState({ price: e.target.value })}
                value={this.state.price}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="offer_amt">Offer amount : </label>
              <input
                type="text"
                name="offer_amt"
                id="offer_amt"
                onChange={(e) => this.setState({ offer_amt: e.target.value })}
                value={this.state.offer_amt}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="final_price">Final Price : </label>
              <input
                type="text"
                name="final_price"
                id="final_price"
                onChange={(e) => this.setState({ final_price: e.target.value })}
                value={this.state.final_price}
              />
            </div>
            <div className="inputForm-field">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
        <div className="display-container">
          {this.state.data.map((entry) => (
            <div className="user" key={entry.id}>
              <div className="user-name">
                Product Name : {entry.product_name}
              </div>
              <div className="user-name">Seller Name : {entry.seller_name}</div>
              <div className="user-name">Price : {entry.price}</div>
              <div className="user-name">Offer Amount : {entry.offer_amt}</div>
              <div className="user-name">Final Price : {entry.final_price}</div>
              <br />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

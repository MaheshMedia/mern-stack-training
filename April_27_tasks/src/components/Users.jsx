import React, { Component } from "react";
import { USERS_CREATE } from "../redux/actions";
import store from "../redux/store";
import { v4 as uuidv4 } from "uuid";

export default class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    };
  }

  getStateFromRedux = () => {
    store.subscribe(() =>
      this.setState({
        data: store.getState().users.data,
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
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
    };

    store.dispatch({ type: USERS_CREATE, payload });

    this.setState({
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      password: "",
    });
  };

  render() {
    return (
      <div className="Users">
        <div className="inputForm-container">
          <form className="inputForm" onSubmit={this.handleSubmit}>
            <div className="inputForm-field">
              <label htmlFor="first_name">First Name : </label>
              <input
                type="text"
                name="first_name"
                id="first_name"
                onChange={(e) => this.setState({ first_name: e.target.value })}
                value={this.state.first_name}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="last_name">Last Name : </label>
              <input
                type="text"
                name="last_name"
                id="last_name"
                onChange={(e) => this.setState({ last_name: e.target.value })}
                value={this.state.last_name}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="phone">Phone : </label>
              <input
                type="text"
                name="phone"
                id="phone"
                onChange={(e) => this.setState({ phone: e.target.value })}
                value={this.state.phone}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="email">Email : </label>
              <input
                type="text"
                name="email"
                id="email"
                onChange={(e) => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="password">Password : </label>
              <input
                type="text"
                name="password"
                id="password"
                onChange={(e) => this.setState({ password: e.target.value })}
                value={this.state.password}
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
                Name : {entry.first_name} {entry.last_name}
              </div>
              <div className="user-ph">Phone : {entry.phone}</div>
              <div className="user-email">Email : {entry.email}</div>
              <div className="user-password">Password : {entry.password}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

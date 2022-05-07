import React, { Component } from "react";
import { ADD_DATA } from "../redux/actions";
import store from "../redux/store";

export default class AddData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      gender: "male",
      age: "",
      qualification: "",
      is_eligible_for_voting: "no",
      org_name: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    store.dispatch({
      type: ADD_DATA,
      payload: this.state,
    });

    this.setState({
      first_name: "",
      last_name: "",
      gender: "",
      age: "",
      qualification: "",
      is_eligible_for_voting: "",
      org_name: "",
    });
  };

  render() {
    return (
      <div className="AddData">
        <h3>Add Data Using store.dispatch() </h3>
        <form className="inputForm" onSubmit={this.handleSubmit}>
          <div className="inputForm-field">
            <label htmlFor="first_name">First name</label>
            <input
              type="text"
              name="first_name"
              id="first_name"
              onChange={(e) => this.setState({ first_name: e.target.value })}
              value={this.state.first_name}
            />
          </div>
          <div className="inputForm-field">
            <label htmlFor="last_name">Last name</label>
            <input
              type="text"
              name="last_name"
              id="last_name"
              onChange={(e) => this.setState({ last_name: e.target.value })}
              value={this.state.last_name}
            />
          </div>
          <div className="inputForm-field">
            <label htmlFor="gender">Gender</label>
            <select
              name="gender"
              id="gender"
              onChange={(e) => this.setState({ gender: e.target.value })}
              value={this.state.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          <div className="inputForm-field">
            <label htmlFor="age">Age</label>
            <input
              type="text"
              name="age"
              id="age"
              onChange={(e) => this.setState({ age: e.target.value })}
              value={this.state.age}
            />
          </div>
          <div className="inputForm-field">
            <label htmlFor="qualification">Qualification</label>
            <input
              type="text"
              name="qualification"
              id="qualification"
              onChange={(e) => this.setState({ qualification: e.target.value })}
              value={this.state.qualification}
            />
          </div>
          <div className="inputForm-field">
            <label htmlFor="is_eligible_for_voting">
              Is eligible for voting
            </label>
            <select
              name="is_eligible_for_voting"
              id="is_eligible_for_voting"
              onChange={(e) =>
                this.setState({ is_eligible_for_voting: e.target.value })
              }
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="inputForm-field">
            <label htmlFor="org_name">Organization name</label>
            <input
              type="text"
              name="org_name"
              id="org_name"
              onChange={(e) => this.setState({ org_name: e.target.value })}
              value={this.state.org_name}
            />
          </div>
          <div className="inputForm-field">
            <input type="submit" value="SUBMIT" />
          </div>
        </form>
      </div>
    );
  }
}

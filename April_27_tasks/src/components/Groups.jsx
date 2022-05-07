import React, { Component } from "react";
import { GROUPS_CREATE } from "../redux/actions";
import store from "../redux/store";

import { v4 as uuidv4 } from "uuid";

export default class Groups extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      group_name: "",
      group_details: "",
      createdAt: "",
      max_members: "",
    };
  }

  getStateFromRedux = () => {
    store.subscribe(() =>
      this.setState({
        data: store.getState().groups.data,
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
      group_name: this.state.group_name,
      group_details: this.state.group_details,
      createdAt: Date(),
      max_members: this.state.max_members,
    };

    store.dispatch({ type: GROUPS_CREATE, payload });

    this.setState({
      group_name: "",
      group_details: "",
      createdAt: "",
      max_members: "",
    });
  };
  render() {
    return (
      <div className="Groups">
        <div className="inputForm-container">
          <form className="inputForm" onSubmit={this.handleSubmit}>
            <div className="inputForm-field">
              <label htmlFor="group_name">Group Name : </label>
              <input
                type="text"
                name="group_name"
                id="group_name"
                onChange={(e) => this.setState({ group_name: e.target.value })}
                value={this.state.group_name}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="group_details">Group Details : </label>
              <input
                type="text"
                name="group_details"
                id="group_details"
                onChange={(e) =>
                  this.setState({ group_details: e.target.value })
                }
                value={this.state.group_details}
              />
            </div>
            <div className="inputForm-field">
              <label htmlFor="max_members">Max Members : </label>
              <input
                type="text"
                name="max_members"
                id="max_members"
                onChange={(e) => this.setState({ max_members: e.target.value })}
                value={this.state.max_members}
              />
            </div>
            <div className="inputForm-field">
              <input type="submit" value="SUBMIT" />
            </div>
          </form>
        </div>
        <div className="display-container">
          {this.state.data.map((entry) => (
            <div className="group" key={entry.id}>
              <div className="group-name">Name : {entry.group_name}</div>
              <div className="group-details">
                Details : {entry.group_details}
              </div>
              <div className="group-date">Created At : {entry.createdAt}</div>
              <div className="group-members">
                Max Members : {entry.max_members}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

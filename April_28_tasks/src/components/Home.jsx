import React, { Component } from "react";
import { connect } from "react-redux";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h3 className="Home-heading">Display Data using connect </h3>
        <div className="Home-display">
          {this.props.reduxData.map((entry) => (
            <div className="user">
              <div className="user-item">
                Name : {entry.first_name} {entry.last_name}
              </div>
              <div className="user-item">Gender : {entry.gender}</div>
              <div className="user-item">Age : {entry.age}</div>
              <div className="user-item">
                Qualification {entry.qualification}
              </div>
              <div className="user-item">
                Is eligible for voting : {entry.is_eligible_for_voting}
              </div>
              <div className="user-item">
                Organisation name : {entry.org_name}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reduxData: state.data,
  };
};

const AppData = connect(mapStateToProps)(Home);

export default AppData;

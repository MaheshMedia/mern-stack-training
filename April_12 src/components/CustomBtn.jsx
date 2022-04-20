import React from "react";

class CustomBtn extends React.Component {
  render() {
    return (
      <div className="customBtn" onClick={this.props.handleBtnClick}>
        <div className="customBtn-title">{this.props.title}</div>
      </div>
    );
  }
}

export default CustomBtn;

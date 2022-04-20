import React from "react";

class DisplayImage extends React.Component {
  render() {
    console.log(this.props.image);
    return (
      <div className="display-img">
        <img src={this.props.image} alt="no image found" />
      </div>
    );
  }
}

export default DisplayImage;

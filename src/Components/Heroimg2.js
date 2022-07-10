import React, { Component } from "react";
import "./Heroimg2Styles.css";

class Heroimg2 extends Component {
  render() {
    return (
      <div className="hero-img">
        <h1>{this.props.heading}</h1>
        <p>{this.props.text}</p>
      </div>
    );
  }
}

export default Heroimg2;

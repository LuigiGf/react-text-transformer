import React, { Component } from "react";

export default class ReverseText extends Component {
  reverseString = () => {
    let splitString = this.props.textInput.split("");
    splitString = splitString.reverse().join("");
    return splitString;
  };

  render() {
    return (
      <div>
        <p>Texto Invertido: </p>
        <p>{this.reverseString()}</p>
        <hr />
      </div>
    );
  }
}

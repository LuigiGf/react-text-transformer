import React, { Component } from "react";

export default class NumericText extends Component {
  numericString = () => {
    var numeric = this.props.textInput;
    numeric = numeric
      .toUpperCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace("O", "0")
      .replace("L", "1")
      .replace("E", "3")
      .replace("A", "4")
      .replace("S", "5")
      .replace("T", "7");
    return numeric;
  };

  render() {
    return (
      <div>
        <p>Texto numérico: </p>
        <p>{this.numericString()}</p>
        <hr />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class CamelCaseText extends Component {
  camelCaseString = () => {
    let camelCase = this.props.textInput;
    camelCase = camelCase
      .toLowerCase()
      .split(" ")
      .map((word) => `${word}`);

    for (let i = 1; i < camelCase.length; i++) {
      camelCase[i] = camelCase[i].toUpperCase();
      let arr = camelCase[i].substr(1).toLowerCase();
      camelCase[i] = camelCase[i].replace(arr.toUpperCase(), arr);
    }
    return camelCase.join("");
  };

  render() {
    return (
      <div>
        <p>camelCase:</p>
        <p>{this.camelCaseString()}</p>
        <hr />
      </div>
    );
  }
}

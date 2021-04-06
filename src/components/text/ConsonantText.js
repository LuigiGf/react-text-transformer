import React, { Component } from "react";

export default class ConsonantText extends Component {
  consonantString = () => {
    let consonant = this.props.textInput;
    let res = consonant.match(/[^aeiou]/gi);

    return res;
  };

  render() {
    return (
      <div>
        <p>Consoantes:</p>
        <p>{this.consonantString()}</p>
        <hr />
      </div>
    );
  }
}

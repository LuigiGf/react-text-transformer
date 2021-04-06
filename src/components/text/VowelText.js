import React, { Component } from "react";

export default class VowelText extends Component {
  vowelString = () => {
    let vowel = this.props.textInput;
    let res = vowel.match(/[aeiou]/gi);

    return res;
  };

  render() {
    return (
      <div>
        <p>Vogais:</p>
        <p>{this.vowelString()}</p>
        <hr />
      </div>
    );
  }
}

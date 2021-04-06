import React, { Component } from "react";

export default class Inputs extends Component {
  handleInputChange = (event) => {
    const text = event.target.value;
    this.props.textInputUpdate(text);
  };

  render() {
    return (
      <div>
        <p>Digite um texto qualquer:</p>
        <input
          onChange={this.handleInputChange}
          placeholder="Write the text here"
          type="text"
        />
      </div>
    );
  }
}

import React, { Component } from "react";

export default class CSVText extends Component {
  CSVString = () => {
    let csvString = this.props.textInput;
    if (csvString === "") {
      return csvString;
    }
    const array = csvString
      .split(" ")
      .map((word) => `"${word}"`)
      .join(",");

    return array;
  };

  render() {
    return (
      <div>
        <p>Texto CSV:</p>
        <p>{this.CSVString()}</p>
        <hr />
      </div>
    );
  }
}

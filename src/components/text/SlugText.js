import React, { Component } from "react";

export default class SlugText extends Component {
  slugString = () => {
    let slug = this.props.textInput;
    slug = slug
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

    const array = slug
      .split(" ")
      .map((word) => `${word}`)
      .join("-");

    return array;
  };
  render() {
    return (
      <div>
        <p>Slug:</p>
        <p>{this.slugString()}</p>
        <hr />
      </div>
    );
  }
}

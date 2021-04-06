import React, { Component } from "react";
import CSVText from "./components/text/CSVText";
import Inputs from "./components/text/Inputs";
import NumericText from "./components/text/NumericText";
import ReverseText from "./components/text/ReverseText";
import SlugText from "./components/text/SlugText";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      text: "",
    };
  }

  handleInput = (newText) => {
    this.setState({
      text: newText,
    });
  };

  render() {
    const { text } = this.state;

    return (
      <div className="container">
        <h1>React-Text-Transformer</h1>
        <Inputs textInputUpdate={this.handleInput}></Inputs>
        <ReverseText textInput={text}></ReverseText>
        <NumericText textInput={text}></NumericText>
        <CSVText textInput={text}></CSVText>
        <SlugText textInput={text}></SlugText>
      </div>
    );
  }
}

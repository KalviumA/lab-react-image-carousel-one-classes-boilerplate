import React, { Component } from "react";
import Carousel from "./components/Carousel";
import "./App.css";



export default class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>images</h1>
        <Carousel />
      </div>
    );
  }
}
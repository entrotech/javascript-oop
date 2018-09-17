import React, { Component } from "react";
import "./App.css";
import Example from "./Components/Example.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">JavaScript OOP</h1>
        </header>
        <div>
          <Example />
        </div>
      </div>
    );
  }
}

export default App;

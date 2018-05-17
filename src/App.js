import React, { Component } from "react";

import { SearchBar } from "./components/SearchBars";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <Todos />
        <Navigation />
      </div>
    );
  }
}

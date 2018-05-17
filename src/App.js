import React, { Component } from "react";
import { connect } from "react-redux";

import { SearchBar } from "./components/SearchBars";
import { Todos } from "./components/Todos";
import { Navigation } from "./components/Navigation";

class App extends Component {
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

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

export default connect(mapStateToProps, {})(App);

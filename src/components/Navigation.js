import React from "react";
import { connect } from "react-redux";

import {
  showAll,
  showActive,
  showCompleted,
  resetTodos
} from "../actions/actions";

export class NavigationContainer extends React.Component {
  render() {
    const { showAll, showActive, showCompleted, resetTodos } = this.props;
    return (
      <div>
        <button onClick={showAll}>All todos</button>
        <button onClick={showActive}> Active </button>
        <button onClick={showCompleted}> Completed </button>
        <button onClick={resetTodos}>reset</button>
      </div>
    );
  }
}

export const Navigation = connect(null, {
  showAll,
  showActive,
  showCompleted,
  resetTodos
})(NavigationContainer);

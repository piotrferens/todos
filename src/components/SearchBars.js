import React from "react";
import { connect } from "react-redux";

import { addTodo, setText } from "../actions/actions";

class SearchBarContainer extends React.Component {
  onChange = event => {
    this.props.setText(event.target.value);
  };

  onKeyPress = event => {
    if (event.charCode === 13 && event.target.value.trim()) {
      this.props.addTodo(event.target.value);
    }
  };
  render() {
    const { value, addTodo } = this.props;
    const isEmpty = value.trim().length ? () => addTodo(value) : null;
    return (
      <div>
        <input
          onChange={this.onChange}
          onKeyPress={this.onKeyPress}
          value={value}
        />
        <button onClick={isEmpty}>add todo</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    value: state.todos.value
  };
}

export const SearchBar = connect(mapStateToProps, {
  addTodo,
  setText
})(SearchBarContainer);

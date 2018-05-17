import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../actions/actions";
import { todosSelector } from "../selectors/todosSelector";

export class TodosContainer extends React.Component {
  render() {
    return (
      <ol>
        {this.props.todos.map(todo => (
          <li
            key={todo.id}
            onClick={() => this.props.toggleTodo(todo.id)}
            style={{
              textDecoration: todo.isFinished ? "line-through" : "none"
            }}
          >
            {todo.text}
          </li>
        ))}
      </ol>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: todosSelector(state)
  };
}

export const Todos = connect(mapStateToProps, {
  toggleTodo
})(TodosContainer);

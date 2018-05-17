import React from "react";
import { connect } from "react-redux";

import { toggleTodo, deleteTodo } from "../actions/actions";
import { todosSelector } from "../selectors/todosSelector";

export class TodosContainer extends React.Component {
  render() {
    const { todos, toggleTodo, deleteTodo } = this.props;
    return (
      <ol>
        {todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.isFinished ? "line-through" : "none"
            }}
          >
            <span onClick={() => toggleTodo(todo.id)}>{todo.text} </span>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
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
  deleteTodo,
  toggleTodo
})(TodosContainer);

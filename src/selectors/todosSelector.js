import { createSelector } from "reselect";

export const todosSelector = createSelector(
  state => state.todos,
  todos => {
    switch (todos.visibilityFilter) {
      case "all":
        return todos.data;
      case "active":
        return todos.data.filter(t => !t.isFinished);
      case "completed":
        return todos.data.filter(t => t.isFinished);
      default:
        return todos.data;
    }
  }
);

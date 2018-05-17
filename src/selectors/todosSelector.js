import { createSelector } from "reselect";

export const todosSelector = createSelector(
  state => state.todos,
  todos => {
    switch (todos.visibilityFilter) {
      case "All":
        return todos.data;
      case "Active":
        return todos.data.filter(t => !t.isFinished);
      case "Completed":
        return todos.data.filter(t => t.isFinished);
      default:
        return todos.data;
    }
  }
);

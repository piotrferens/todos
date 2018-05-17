let nextTodoId = 0;

export const SET_TEXT = "SET_TEXT";
export const setText = payload => ({
  type: SET_TEXT,
  payload
});

export const ADD_TODO = "ADD_TODO";
export const addTodo = payload => ({
  type: ADD_TODO,
  id: nextTodoId++,
  payload
});

export const RESET_TODOS = "RESET_TODOS";
export const resetTodos = () => ({
  type: RESET_TODOS
});

export const TOGGLE_TODO = "TOOGLE_TODO";
export const toggleTodo = payload => ({
  type: TOGGLE_TODO,
  payload
});

export const SHOW_ALL = "SHOW_ALL";
export const showAll = () => ({
  type: SHOW_ALL
});

export const SHOW_COMPLETED = "SHOW_COMPLETED";
export const showCompleted = payload => ({
  type: SHOW_COMPLETED,
  payload
});

export const SHOW_ACTIVE = "SHOW_ACTIVE";
export const showActive = () => ({
  type: SHOW_ACTIVE
});

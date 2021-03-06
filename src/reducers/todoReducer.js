import { combineReducers } from "redux";

import {
  ADD_TODO,
  SET_TEXT,
  TOGGLE_TODO,
  SHOW_ALL,
  SHOW_ACTIVE,
  SHOW_COMPLETED,
  RESET_TODOS,
  DELETE_TODO
} from "../actions/actions";

function data(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.payload,
          isFinished: false
        }
      ];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload);
    case RESET_TODOS:
      return [];
    case TOGGLE_TODO:
      return state.map(
        todo =>
          todo.id !== action.payload
            ? todo
            : {
                ...todo,
                isFinished: !todo.isFinished
              }
      );
    default:
      return state;
  }
}

function value(state = "", action) {
  switch (action.type) {
    case SET_TEXT:
      return action.payload;
    case ADD_TODO:
      return "";
    default:
      return state;
  }
}

function visibilityFilter(state = "all", action) {
  switch (action.type) {
    case SHOW_ALL:
      return "all";
    case SHOW_ACTIVE:
      return "active";
    case SHOW_COMPLETED:
      return "completed";
    default:
      return state;
  }
}

export const todos = combineReducers({
  data,
  value,
  visibilityFilter
});

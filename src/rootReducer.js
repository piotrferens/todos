import { combineReducers } from "redux";

import { todos } from "./reducers/todoReducer";

export const rootReducer = combineReducers({
  todos
});

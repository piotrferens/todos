import React from "react";
import ReactDOM from "react-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import App from "./App";
import { rootReducer } from "./rootReducer";

const reduxDevtool = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const enhancer = reduxDevtool || compose;

const store = createStore(rootReducer, enhancer(applyMiddleware()));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

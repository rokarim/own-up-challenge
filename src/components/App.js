import React, { Component } from "react";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import QuoteReducer from "./../reducers/QuoteReducer";
import QuoteRatesContainer from "./QuoteRatesContainer";

const loggerMiddleware = createLogger();
const store = createStore(
  QuoteReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <QuoteRatesContainer />
      </Provider>
    );
  }
}

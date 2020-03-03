import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import QuoteReducer from "./../reducers/QuoteReducer";
import QuoteRatesContainer from "./QuoteRatesContainer";

const store = createStore(QuoteReducer);

export default class App extends Component() {
  render() {
    return (
      <Provider store={store}>
        <QuoteRatesContainer />
      </Provider>
    );
  }
}

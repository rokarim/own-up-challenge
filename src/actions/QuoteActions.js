// import fetch from "cross-fetch";
import defaultOptions from "./../fetchOptions";
export const REQUEST_QUOTES = "REQUEST_QUOTES";
export const RECEIVE_QUOTES = "RECEIVE_QUOTES";

function requestQuotes(params) {
  return {
    type: REQUEST_QUOTES,
    params
  };
}

function receiveQuotes(json) {
  return {
    type: RECEIVE_QUOTES,
    quotes: json.rateQuotes.map(items => items),
    receivedAt: Date.now()
  };
}

export default function fetchQuotes(params) {
  const { loanSize, creditScore, propertyType, occupancy } = params;
  console.log(
    "process.env.REACT_APP_AUTH_TOKEN",
    process.env.REACT_APP_AUTH_TOKEN
  );
  return dispatch => {
    dispatch(requestQuotes({ loanSize, creditScore, propertyType, occupancy }));
    return fetch(
      `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`,
      defaultOptions
    )
      .then(response => response.json())
      .then(json => {
        dispatch(receiveQuotes(json));
      })
      .catch(error => console.error(error));
  };
}

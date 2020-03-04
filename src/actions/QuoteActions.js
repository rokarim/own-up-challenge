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
    quotes: json.data.rateQuotes.map(items => items.properties),
    receivedAt: Date.now()
  };
}

export function fetchQuotes(params) {
  const { loanSize, creditScore, propertyType, occupancy } = params;
  return dispatch => {
    dispatch(requestQuotes({ loanSize, creditScore, propertyType, occupancy }));
    return fetch(
      `https://ss6b2ke2ca.execute-api.us-east-1.amazonaws.com/Prod/quotes?loanSize=${loanSize}&creditScore=${creditScore}&propertyType=${propertyType}&occupancy=${occupancy}`,
      defaultOptions
    )
      .then(response => response.json())
      .then(json => dispatch(receiveQuotes(json)))
      .catch(error => console.error(error));
  };
}

import { REQUEST_QUOTES, RECEIVE_QUOTES } from "./../actions/QuoteActions";

export default function QuotesReducer(
  state = {
    isFetching: false,
    quotes: [],
    lastUpdated: null
  },
  action
) {
  switch (action.type) {
    case REQUEST_QUOTES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_QUOTES:
      return Object.assign({}, state, {
        isFetching: false,
        quotes: action.quotes,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

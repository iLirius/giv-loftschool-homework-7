import { createActions } from "redux-actions";

export const {
  search: {
    request: searchRequest,
    success: searchSuccess,
    failure: searchFailure
  }
} = createActions({
  SEARCH: {
    REQUEST: undefined,
    SUCCESS: [result => result, result => ({ length: result.length })],
    FAILURE: undefined
  }
});

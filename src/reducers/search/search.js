import {
  searchRequest,
  searchSuccess,
  searchFailure
} from "../../actions/searchActions";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

const error = handleAction(
  searchFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [searchRequest]: () => false,
    [searchSuccess]: () => true,
    [searchFailure]: () => true
  },
  false
);

const result = handleAction(
  searchSuccess,
  (state, action) => action.payload,
  []
);

export const getResult = state => state.search.result;
export const getIsFetching = state => state.search.isFetching;
export const getError = state => state.search.error;

export default combineReducers({
  error,
  result,
  isFetching
});

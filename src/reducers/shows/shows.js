import {
  fetchShowEntitiesRequest,
  fetchShowEntitiesSuccess,
  fetchShowEntitiesFailure
} from "../../actions/showActions";
import { combineReducers } from "redux";
import { handleAction, handleActions } from "redux-actions";

const error = handleAction(
  fetchShowEntitiesFailure,
  (state, action) => action.error,
  null
);

const isFetching = handleActions(
  {
    [fetchShowEntitiesRequest]: () => false,
    [fetchShowEntitiesSuccess]: () => true,
    [fetchShowEntitiesFailure]: () => true
  },
  false
);

const entities = handleAction(
  fetchShowEntitiesSuccess,
  (state, action) => action.payload,
  []
);

export const getEntities = state => state.shows.entities;
export const getIsFetching = state => state.shows.isFetching;

export default combineReducers({
  error,
  entities,
  isFetching
});

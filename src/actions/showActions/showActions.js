import { createActions } from "redux-actions";

export const {
  show: {
    entities: {
      fetchRequest: fetchShowEntitiesRequest,
      fetchSuccess: fetchShowEntitiesSuccess,
      fetchFailure: fetchShowEntitiesFailure
    }
  }
} = createActions({
  show: {
    ENTITIES: {
      FETCH_REQUEST: undefined,
      FETCH_SUCCESS: [
        entities => entities,
        entities => ({ length: entities.length })
      ],
      FETCH_FAILURE: undefined
    }
  }
});

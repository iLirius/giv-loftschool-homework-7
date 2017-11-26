import { show } from "../../components/Api";
import {
  fetchShowEntitiesRequest,
  fetchShowEntitiesSuccess,
  fetchShowEntitiesFailure
} from "../../actions/showActions";

const showMiddleware = store => next => actions => {
  if (actions.type === fetchShowEntitiesRequest.toString()) {
    show(actions.payload)
      .then(data => {
        console.log(data);
        store.dispatch(fetchShowEntitiesSuccess(data));
      })
      .catch(error => {
        store.dispatch(fetchShowEntitiesFailure(error));
      });
  }
  return next(actions);
};

export default showMiddleware;

import { search } from "../../components/Api";
import {
  searchRequest,
  searchSuccess,
  searchFailure
} from "../../actions/searchActions";

const searchMiddleware = store => next => actions => {
  if (actions.type === searchRequest.toString()) {
    search(actions.payload)
      .then(data => {
        store.dispatch(searchSuccess(data));
      })
      .catch(error => {
        store.dispatch(searchFailure(error));
      });
  }
  return next(actions);
};
export default searchMiddleware;

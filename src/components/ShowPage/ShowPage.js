import * as React from "react";
import { connect } from "react-redux";

import { getEntities, getIsFetching } from "../../reducers/shows";

import {
  fetchShowEntitiesRequest,
  fetchShowEntitiesSuccess,
  fetchShowEntitiesFailure
} from "../../actions/showActions";

class ShowPage extends React.Component {
  render() {
    return <div>2</div>;
  }
}

const mapStateToProps = state => ({
  entities: getEntities(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  fetchShowEntitiesRequest,
  fetchShowEntitiesSuccess
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

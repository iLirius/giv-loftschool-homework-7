import * as React from "react";
import { connect } from "react-redux";
import {
  getResult,
  getIsFetching,
  getIsFetched,
  getError
} from "../../reducers/search";
import { searchRequest } from "../../actions/searchActions";
import Panel from "../Panel";

import "./Search.css";

class Search extends React.Component {
  state = {
    query: ""
  };

  handleClickSearch = event => {
    const { query } = this.state;
    const { searchRequest } = this.props;
    searchRequest(query);
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({ ...this.state, query: value });
  };

  handleKeyPress = event => {
    const { query } = this.state;
    const { searchRequest } = this.props;

    if (event.key === "Enter") {
      searchRequest(query);
    }
  };
  renderListShow = () => {
    const { result, isFetched } = this.props;
    let returnResult;
    if (result.length && isFetched) {
      returnResult = result.map(newProps => (
        <Panel key={newProps.id} {...newProps} />
      ));
    }
    return returnResult;
  };
  render() {
    const { isFetching, error, isFetched } = this.props;
    const { query } = this.state;

    return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container">
            <div className="navbar-header">
              <div className="navbar-form navbar-right">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search for..."
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    value={query}
                  />
                  <span className="input-group-btn">
                    <button
                      className="btn btn-default"
                      type="button"
                      onClick={this.handleClickSearch}
                    >
                      Go!
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="show-list">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="row text-center">
                  {isFetching && !isFetched
                    ? "Загрузка"
                    : this.renderListShow()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
// export default Search;

const mapStateToProps = state => ({
  result: getResult(state),
  isFetching: getIsFetching(state),
  isFetched: getIsFetched(state),
  error: getError(state)
});

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

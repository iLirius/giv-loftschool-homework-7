import * as React from "react";
import { connect } from "react-redux";
import { getEntities, getIsFetching } from "../../reducers/shows";
import { fetchShowEntitiesRequest } from "../../actions/showActions";
import "./ShowPage.css";

class ShowPage extends React.Component {
  componentDidMount() {
    const { isFetched, fetchShowEntitiesRequest } = this.props;
    if (!isFetched) {
      fetchShowEntitiesRequest(this.props.match.params.id);
    }
  }

  render() {
    const { isFetching, entities } = this.props;
    const { name, summary, image, _embedded } = entities;

    if (!isFetching) {
      return <div>Загрузка...</div>;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <h1>{name}</h1>
            </div>
            <div className="row">
              <div className="col-lg-3">
                {image ? (
                  <img src={image.medium} alt="" className="img-thumbnail" />
                ) : (
                  "нет фото"
                )}
              </div>
              <div className="col-lg-9">
                <div dangerouslySetInnerHTML={{ __html: summary }} />
              </div>
            </div>
            <hr />
            <div className="row">
              {isFetching &&
                Object.keys(_embedded).map((i, k) => {
                  return _embedded[i].map((j, x) => {
                    return (
                      <div className="col-lg-3 person">
                        <p>{j.person.name}</p>
                        <img src={j.person.image.medium} alt={j.person.name} />
                      </div>
                    );
                  });
                })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entities: getEntities(state),
  isFetching: getIsFetching(state)
});

const mapDispatchToProps = {
  fetchShowEntitiesRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowPage);

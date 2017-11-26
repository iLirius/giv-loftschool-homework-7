import * as React from "react";
import { Link } from "react-router-dom";

class Panel extends React.Component {
  render() {
    return (
      <div className="col-lg-3 col-md-4 col-sm-4 col-xs-12">
        <div className="panel panel-default">
          <div className="panel-heading">
            <Link to={"/shows/" + this.props.id}>{this.props.name}</Link>
          </div>
          <div className="panel-body tetx-center">
            {this.props.image !== null ? (
              <img
                className="img-thumbnail"
                src={this.props.image.medium}
                alt=""
              />
            ) : (
              "нет фото"
            )}
            <hr />
            <div dangerouslySetInnerHTML={{ __html: this.props.summary }} />
          </div>
        </div>
      </div>
    );
  }
}
export default Panel;

'use strict';
var React = require('react');
// footer
const CommonCenter = React.createClass({
render() {
    return (
       <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center fh5co-heading">
            <i className={this.props.iconClass}></i>
            <h2>{this.props.title}</h2>
            <p>{this.props.desc} </p><br/><br/>
          </div>
        </div>
    );
  }
});


module.exports = CommonCenter;

'use strict';
var React = require('react');
// footer
const BgOverText = React.createClass({
render() {
    return (
       <div className="fh5co-parallax" style={{backgroundImage: 'url(' + this.props.backgroundImage + ')'}} data-stellar-background-ratio="0.5">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-center fh5co-table">
              <div className="fh5co-intro fh5co-table-cell animate-box">
                <h1 className="text-center">{this.props.title}</h1>
                <p>{this.props.desc} <a href="#">Freehtml5</a></p>
                <p><a href="#" className="btn btn-primary btn-lg">Get started</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});


module.exports = BgOverText;

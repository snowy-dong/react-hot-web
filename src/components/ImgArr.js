'use strict';
var React = require('react');
// footer
const ImgArr = React.createClass({
render() {
    return (
		<a href="#" className="portfolio-grid-item" style={{ backgroundImage: 'url(' + this.props.backgroundImage + ')'}} >
          <div className="desc2">
            <h3>{this.props.title}</h3>
            <span>{this.props.span}</span>
            <i className="sl-icon-heart"></i>
          </div>
        </a>
    );
  }
});


module.exports = ImgArr;


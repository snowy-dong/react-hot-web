'use strict';
var React = require('react');
import { Jumbotron } from 'react-bootstrap';
import { RouteTransition } from 'react-router-transition';
// footer
const JumbotronTpl = React.createClass({
render() {
    return (
	<Jumbotron style={{backgroundImage: 'url(' + this.props.backgroundImage + ')'}}>
	<div className="bg-shadow"></div>
	<RouteTransition component='div' className="slider-text-inner"
	pathname={this.props.locationpathname}
	atEnter={{ translateY: 400 }}
	atLeave={{ translateY: -400 }}
	atActive={{ translateY: 10 }}
	mapStyles={styles => ({ transform: `translateY(${styles.translateY}%)` })}>

	<h1>{this.props.title}</h1>
	<p>{this.props.desc}</p>
	{ this.props.children }
	</RouteTransition>
    </Jumbotron>
    );
  }
});



module.exports = JumbotronTpl;

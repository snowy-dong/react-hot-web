'use strict';
var React = require('react');
var ReactDom = require('react-dom');
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './App';
import Home from './Home';
import About from './About';
import Blog from './Blog';
import Services from './Services';
// CSS
require('normalize.css');
require('../styles/main.css');

ReactDom.render((
 <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="About" component={About}/>
      <Route path="Services" component={Services}/>
      <Route path="*" component={Blog}/>
    </Route>
  </Router>
  ), document.getElementById('content')); // jshint ignore:line


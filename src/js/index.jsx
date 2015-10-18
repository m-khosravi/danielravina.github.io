var React       = require('react');
var ReactDom    = require('react-dom');
var ReactRouter = require('react-router');
var Router      = ReactRouter.Router;
var Route       = ReactRouter.Route;
var IndexRoute  = ReactRouter.IndexRoute;
"use strict"

// routes:
var Home    = require("./components/Home/Home"),
    About   = require("./components/About/About"),
    Contact = require("./components/Contact/Contact");

var Layout      = require('./components/Layout');
var createBrowserHistory = require('history/lib/createBrowserHistory');

ReactDom.render((
  <Router history={createBrowserHistory()}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="contact" component={Contact} />
    </Route>
  </Router>
), document.getElementById('app'));



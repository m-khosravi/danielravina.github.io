var React    = require('react');
var ReactDom = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var App   = require('./components/App');

"use strict"

// routes:
var Home    = require("./components/Home/Home"),
    About   = require("./components/About/About"),
    Contact = require("./components/Contact/Contact");

var createBrowserHistory = require('history/lib/createBrowserHistory');
var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}>
      <Route name="home" path="/" component={About} />
      <Route name="about" path="/about" component={Home} />
      <Route name="contact" path="/contact" component={Contact} />
    </Route>
  </Router>
);

ReactDom.render(routes, document.getElementById('app'));



var React    = require('react');
var ReactDom = require('react-dom');
var Projects = require('./components/Projects');
var $        = require('jquery');


ReactDom.render(<Projects />, document.getElementById('projects'));
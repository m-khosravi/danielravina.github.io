var React    = require('react');
var ReactDom = require('react-dom');
var App = require('./components/App');

ReactDom.render(<App />, document.getElementById('app'));



var $ = require('jquery');

$(document).ready(function(){
  $("body").click(function(e) {
    console.log(e)
  })
})
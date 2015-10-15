var React       = require('react');
var ReactRouter = require('react-router');
var Link  = ReactRouter.Link

var About = React.createClass({
  render: function() {
    return (
      <Link to={`/about`}>link</Link>
    )
  }
})


module.exports = About;
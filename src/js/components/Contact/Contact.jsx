var React       = require('react');
var ReactRouter = require('react-router');
var Link  = ReactRouter.Link

var Contact = React.createClass({
  render: function() {
    return (
      <Link to={`/contact`}>link</Link>
    )
  }
})


module.exports = Contact;
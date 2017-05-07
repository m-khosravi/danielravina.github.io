var React       = require('react');
var Colors      = require('data/techColors') // " 'data' is an alias in webpack config"

var Tag = React.createClass({

  componentWillMount: function() {
    this.tag = Colors[this.props.tech];
  },

  render: function() {
    return (
      <li style={this.getStyle()} className={this.getClass()}>
        {this.props.tech}
      </li>
    );
  },

  getStyle: function() {
    return {
      background: this.tag[0],
    }
  },

  getClass: function() {
    return this.tag[1];
  }
})

module.exports = Tag;

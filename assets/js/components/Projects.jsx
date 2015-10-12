var $           = require('jquery');
var React       = require('react');
var Project     = require('./Project');
var Grid        = require('./Grid/Grid');

var Projects = React.createClass({

  getInitialState: function () {
    return { projects: [] };
  },

  componentWillMount: function() {
    (function(_this) {
      $.get('data/projects.json',  function(projects) {
        _this.setState({projects: projects})
      })
    })(this)
  },

  render: function() {
    return <Grid data={this.state.projects} component={Project} />
  },


})

module.exports = Projects;
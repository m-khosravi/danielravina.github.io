var $           = require('jquery');
var React       = require('react');
var Project     = require('./Project');
var Grid        = require('./Grid/Grid');
var Modal       = require('./Modal');

var App = React.createClass({

  getInitialState: function () {
    return { projects: [], currentProject: null };
  },

  componentWillMount: function() {
    (function(_this) {
      $.get('data/projects.json',  function(projects) {
        _this.setState({projects: projects})
      })
    })(this)
  },

  render: function() {
    return (
      <div>
        <Modal currentProject={this.state.currentProject} backgroundClick={this.backgroundClick}/>
        <Grid data={this.state.projects} component={Project} projectClicked={this.projectClicked} />
      </div>
    )
  },

  projectClicked: function(data) {
    this.setState({currentProject: data})
  },

  backgroundClick: function() {
    // close
    this.setState({currentProject: null})
  }


})

module.exports = App;
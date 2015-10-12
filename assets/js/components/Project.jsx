var React = require('react');
var Tag   = require('./Tag');

var Project = React.createClass({

  render: function() {
    return (
      <div className={"projectTile"}>
        <div className={"thumb"} style={{backgroundImage: "url(assets/images/projects/burrardPlace/burrardplace.png)"}} />
        <footer>
          <p>{this.props.data.name}</p>
        </footer>
      </div>
    );
  },

  getTags: function() {
    return this.props.data.tech.map(function(tech, i) {
      return <Tag key={i} tech={tech} />
    })
  }
})

module.exports = Project;
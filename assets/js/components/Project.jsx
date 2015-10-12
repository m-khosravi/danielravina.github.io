var React = require('react');
var Tag   = require('./Tag');
// var Modal = require('./Modal')
var Project = React.createClass({

  render: function() {
    return (
      <div className={"projectTile"} onClick={this.clickHandler}>
        <div className={"thumb"} style={{backgroundImage: "url("+ this.props.data.thumb_img +")"}} />
        {/*<div className={"thumb"} style={{backgroundImage: "url(assets/images/test.png)"}} />*/}
        <footer>
          <p>{this.props.data.name}</p>
        </footer>
      </div>
    );
  },

  clickHandler: function() {
    this.props.onClick(this.props.data)
  },

  getTags: function() {
    return this.props.data.tech.map(function(tech, i) {
      return <Tag key={i} tech={tech} />
    })
  }
})

module.exports = Project;
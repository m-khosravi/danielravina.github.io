var React        = require('react');
var Tag          = require('./Tag');
var ImageGallery = require('react-image-gallery');

var images = [];
var Modal = React.createClass({

  getInitialProps:function() {
    return {
      currentProject: null
    };
  },

  render: function() {
    if(!this.props.currentProject) {
      return <div className={"modal hidden"} />
    }

    return (
      <div className={"modal active"}>
        <div className={"background"} onClick={this.props.backgroundClick}></div>
        <div className={"content"}>
          <div className={"close"} onClick={this.props.backgroundClick}>X</div>
          <header>
            <h1 className={"modalTitle"}>{this.props.currentProject.name}
              <span className={"companyName"}>{" @" + this.props.currentProject.company}</span>
            </h1>
            <p className={"modalSubtitle"}>Roles: {this.props.currentProject.roles.join(', ')}.</p>
            <ul className={"tags"}>{this.renderTags()}</ul>
            <p className={"description"}>{this.props.currentProject.description}</p>
          </header>
           <ImageGallery
            items={images}/>
        </div>
      </div>
    );
  },

  renderTags: function() {
    return this.props.currentProject.tech.map(function(tech, i) {
      return <Tag key={i} tech={tech} />
    })
  }

})

module.exports = Modal;
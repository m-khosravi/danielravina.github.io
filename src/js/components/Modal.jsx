var React        = require('react');
var Tag          = require('./Tag');
var ImageGallery = require('react-image-gallery');

var Modal = React.createClass({
  // prevent from fetching again
  cache: {
    tags: {},
    images: {}
  },

  getInitialProps:function() {
    return {
      project: null
    };
  },

  render: function() {
    if(!this.props.project) {
      return <div className={"modal hidden"} />
    }


    return (
      <div className={"modal active"}>
        <div className={"background"} onClick={this.props.backgroundClick}></div>
        <div className={"content"} style={this._imagesExists() || this._hasVideo() ? {} : {top: "15%"}}>
          <div className={"close"} onClick={this.props.backgroundClick}>X</div>
          <header>
            <h1 className={"modalTitle"}>{this.props.project.name}
              <span className={"companyName"}>{" @" + this.props.project.company}</span>
            </h1>
            <p className={"modalSubtitle"}>Roles: {this.props.project.roles.join(', ')}.</p>
            <ul className={"tags"}>{this.renderTags()}</ul>
            <p className={"description"}>{this.props.project.description}</p>
          </header>
          {this.renderGallery()}
        </div>
      </div>
    );
  },

  renderImages: function() {
    // check if images were rendered in before
    if (this.cache.images[this.props.project.name]) {
      // returned cached version
      return this.cache.images[this.props.project.name]
    }

    // .. if not, fetch them again
    var images = this.props.project.images.map(function(img){
      return { original: img } // required for react-image-gallery
    })

    // add to cache
    this.cache.images[this.props.project.name] = images // cache

    return images;
  },

  renderTags: function() {
   // check if images were rendered in before
    if (this.cache.tags[this.props.project.name]) {
      // returned cached version
      return this.cache.tags[this.props.project.name]
    }

    var tags = this.props.project.tech.map(function(tech, i) {
      return <Tag key={i} tech={tech} />
    })

    // add to cache
    this.cache.tags[this.props.project.name] = tags // cache

    return tags;
  },

  renderGallery: function() {
    if(this._imagesExists()) {
      return (<ImageGallery
              items={this.renderImages()}/>);
    } else if(this._hasVideo()) {
      return(<div className={"iframeWrapper"}>
        <iframe src={this.props.project.video} width={'800px'} height={'400px'}></iframe>
      </div>);
    } else {
      return (
        <h4 className={"link"}>
          <a target={"_blank"} href={this.props.project.link}>{this.props.project.link}</a>
        </h4>
      )
    }
  },

  _imagesExists:function() {
    return this.props.project.images.length > 0;
  },

  _hasVideo: function() {
    return !!this.props.project.video;
  }

})

module.exports = Modal;
var React                   = require('react');
var ReactRouter             = require('react-router');
var Link                    = ReactRouter.Link;
var Layout = React.createClass({

  componentDidMount: function() {
    var typer = this.refs.typer
    $(typer).typed({
        strings: ["web stuff 🕸", "Mobile apps 📱", "learning machines 💾"],
        typeSpeed: 0,
        loop: true,
        backDelay: 2500,
      });
  },

  render: function() {
    return (
      <div className="layout">
        <div className="card">
          <h1 id="logo">Daniel Ravina</h1>
          <p id="typer" >Build <span ref="typer"></span></p>
        </div>
      </div>
    );
  }
});


module.exports = Layout;

var React                   = require('react');
var ReactRouter             = require('react-router');
var Link                    = ReactRouter.Link;
var Layout = React.createClass({

  componentDidMount: function() {
    var typer = this.refs.typer
    $(typer).typed({
        strings: ["First sentence.", "Second sentence."],
        typeSpeed: 0
      });
  },

  render: function() {
    return (
      <div>
        <header id="main">
          <div className="wrapper">
            <Link to="">
              <h1 id="logo"><span>D</span>aniel <span className="mirror">R</span>avina</h1>
              <p ref="typer" id="typer"></p>
            </Link>
            <ul>
              <li><Link to="">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
});


module.exports = Layout;

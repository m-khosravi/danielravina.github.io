var React                   = require('react');
var ReactRouter             = require('react-router');
var Link                    = ReactRouter.Link;
var Layout = React.createClass({
  render: function() {
    return (
      <div>
        <header id="main">
          <div className="wrapper">
            <Link to="">
              <h1 id="logo"><span>D</span>aniel <span className="mirror">R</span>avina</h1>
            </Link>
            <ul>
              <li><Link to="">home</Link></li>
              <li><Link to="/about">about</Link></li>
              <li><Link to="/contact">contact</Link></li>
            </ul>
          </div>
        </header>
        <div className="wrapper">
          {this.props.children}
        </div>
        <footer id="main">
          <p>
            <a target="_blank" href="https://github.com/danielravina/danielravina.github.io">Built </a>
            and designed by <Link to="/about">me</Link> <br />
            using <img src="src/images/icons/react.png" id="react-icon" /><a target="_blank" href="https://facebook.github.io/react/">React.js</a></p>
        </footer>
      </div>
    );
  }
});


module.exports = Layout;
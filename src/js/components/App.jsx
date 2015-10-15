var React       = require('react');
var ReactRouter = require('react-router');
var Link  = ReactRouter.Link

var About = React.createClass({
  render: function() {
    return (
      <header id="main">
        <div class="wrapper">
          <h1 id="logo"><span>D</span>aniel <span class="mirror">R</span>avina</h1>
          <ul>
            <li><a href="">home</a></li>
            <li><a href="about">about</a></li>
            <li><a href="contact">contact</a></li>
          </ul>
        </div>
      </header>
      {this.props.children}
      <footer id="main">
        <p>
        <a target="_blank" href="https://github.com/danielravina/danielravina.github.io">Built</a>
        and designed by <a href="#about">me</a> <br/ >
        using <img src="src/images/icons/react.png" id="react-icon"><a target="_blank"  href="https://facebook.github.io/react/">React.js</a></p>
      </footer>
    )
  }
})


module.exports = About;
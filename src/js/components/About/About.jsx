var React       = require('react');
var ReactRouter = require('react-router');
var Link  = ReactRouter.Link

var About = React.createClass({
  render: function() {
    return (
      <div id="about">
        <div className="row">
          <div className="medium-4 small-10 medium-centered small-centered columns">
            <img className="my-image" src="https://s3-us-west-2.amazonaws.com/danielravina-portfolio/_me.jpg" alt=""/>
          </div>
        </div>
        <div className="row">
          <div className="medium-6 small-10 medium-centered small-centered columns">
            <p>
              {"In my 4 years of industry experience, I was fortunate enough to work with some great clients and build cool stuff for them! Just to name a few - BC Liquor Distribution Branch, BC Hydro, UBC, Cisco, Live Nation, MHCC and more. I was involved in every aspect of the development cycle, starting from the discovery phase, requirements analysis, design, test, development, and deployment."}
            </p>
            <p>
              {"My go-to languages at the moment are Javascript and Ruby. I love the stability, elegance and simplicity of Ruby and astonished by the possibilities and power of javascript with Node.js."}
            </p>
            <p>
              {"I earned 3 professional certificates from BCIT, all through part-time studies (Evenings and weekends) while working 40 - 60 hours a week. Now I'm on my way to complete a diploma in Computer Systems from BCIT."}
            </p>
            <p>
              {"In my free time you'll probably find me at a local tech meetup, or experimenting with cool new technologies or contributing to open source projects."}
            </p>
          </div>
        </div>
      </div>
    )
  }
})


module.exports = About;
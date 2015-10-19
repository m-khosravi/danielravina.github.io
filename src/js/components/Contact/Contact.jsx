var React       = require('react');
var queryString = require('query-string');
var MY_EMAIL = "danielravina@gmail.com";
var Contact = React.createClass({

  getInitialState:function() {
      return {
        mailTo: ""
      }
  },

  render: function() {
    return (
      <div id="contact">
        <div className="row">
          <div className="medium-6 small-10 medium-centered small-centered columns">
            <h3>Lets talk</h3>
            <ul>
              <li><a target="_blank" href="https://twitter.com/danielravina"><i className="fa fa-twitter-square"></i></a></li>
              <li><a target="_blank" href="https://github.com/danielravina"><i className="fa fa-github-square"></i></a></li>
              <li><a target="_blank" href="https://www.linkedin.com/pub/daniel-ravina/67/6a9/a10"><i className="fa fa-linkedin-square"></i></a></li>
            </ul>

            <input type="text" name="subject" placeholder="Subject" onBlur={this.updateMailTo} ref="subject"/>
            <textarea name="body" id="" cols="30" rows="10" placeholder="What's on your mind?" ref="body" onBlur={this.updateMailTo}></textarea>
            <a target="_blank" href={this.state.mailTo} className="button nsmall radius">Send</a>
          </div>
        </div>
      </div>
    )
  },
  updateMailTo:function() {
    var subject = this.refs.subject.value;
    var body = this.refs.body.value;
    var querystring = queryString.stringify( { "subject" : subject , "body" : body } , true );
    var mailto = "mailto:" + MY_EMAIL + "?" + querystring
    this.setState({
      mailTo: mailto
    })
  }
})


module.exports = Contact;
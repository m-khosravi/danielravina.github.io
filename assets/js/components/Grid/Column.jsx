var React       = require('react');

var Column = React.createClass({

  columnToSpace: function() {
    return {
      "1": "small-12",
      "2": "small-6",
      "3": "small-4",
      "4": "small-12 medium-3", // todo
      "6": "small-2",
      "12": "small-1"
    }[this.props.columns]
  },

  getInitialState:function() {
    return { transitionClass: "" }
  },

  componentWillMount:function() {
    var delaySpeed = 120; // higher is slower
    setTimeout(this.transit, (this.props.delay * delaySpeed))
  },

  render: function() {
    return <div style={this.state.transition} className={this.columnToSpace()  + " columns " + this.state.transitionClass} >{this.props.children}</div>
  },

  transit: function() {
    this.setState({transitionClass: "enter"})
  }
})

module.exports = Column;
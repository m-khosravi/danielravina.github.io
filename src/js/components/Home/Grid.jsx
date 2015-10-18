var React      = require('react');
var Column     = require('./Column');
var Row        = require('./Row');

var COLUMNS = 4;

var Grid = React.createClass({

  render: function() {
    var self = this;
    var rows = this.props.data.map(function(item, i) {
      if(i % COLUMNS == 0) {
        return self.generateRow(i, i + COLUMNS - 1);
      }
    })

    return (
      <div className={"react-grid"} >
        {rows}
      </div>
    )
  },

  generateRow: function(from, to) {
    var DataComponent = this.props.component;
    var columnsPerRow = [];
    for (var i = from; i <= to; i++) {
      var item = this.props.data[i];
      if (item) {
        columnsPerRow.push (
          <Column key={i} delay={i} columns={COLUMNS} >
            <DataComponent data={item} onClick={this.props.projectClicked}/>
          </Column>
        )
      } else {
        columnsPerRow.push(
          <Column key={i} columns={COLUMNS}>
            <div className={"lastColumn"}>
              <h3>Hi There!</h3>
              <p>Found anything useful on this site? <a href="contact">Drop me a line</a>, I'd love to hear about it.</p>
            </div>
          </Column>
        );
      }
    };

    return(
      <Row key={from}>
        {columnsPerRow}
      </Row>
    )
  }

})

module.exports = Grid;

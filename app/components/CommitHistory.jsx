// 
//	CommitHistory.jsx
//
//	Entire commit history component
//

var React = require('react');
var CommitEntry = require('./CommitEntry');

var CommitHistory = React.createClass({
  render: function() {
		// Build list items of single tweet components using map
    var history = this.props.history.map(function(entry){
      return (
        <CommitEntry key={entry.revision} entry={entry} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ul className="history">{history}</ul>
    )

  }
});

module.exports = CommitHistory;

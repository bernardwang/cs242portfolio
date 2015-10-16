// 
//	CommitEntry.jsx
//
//	Single commit entry component
//

var React = require('react');
var CommitDetail = require('./CommitDetail');

var CommitEntry = React.createClass({
	
  render: function() {
		var entry = this.props.entry;
		return (
			<li className={"entry"}>
				<h2>{entry.msg}</h2>
				<h3>{entry.date}</h3>
				<CommitDetail open = {false} entry = {entry} />
      </li>
		)
  }
});

module.exports = CommitEntry;

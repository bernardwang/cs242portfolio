// 
//	CommitEntry.jsx
//
//	Single commit entry component
//

var React = require('react');

var CommitEntry = React.createClass({
  render: function() {
		var entry = this.props.entry;
		return (
			<li className={"entry"}>
				<p>{entry.msg}</p>
      </li>
		)
  }
});

module.exports = CommitEntry;

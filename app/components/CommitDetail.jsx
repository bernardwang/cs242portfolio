// 
//	CommitDetails.jsx
//
//	Single commit detail component
//

var React = require('react');

var CommitDetail = React.createClass({
	getInitialState: function() {
    return {
      open: false
    };
  },
	
  render: function() {
		
		// Build list of file changes
		var entry = this.props.entry;
		var changes = entry.changes.map(function(change){
      return (
				<li key={entry.revision}>
					<p>{change}</p>
      	</li>
      )
    });
		
		return (
			<div className={"detail"}>
				<h3>{entry.revision}</h3>
				<ul>
					{changes}
				</ul>
			</div>
		)
  }
});

module.exports = CommitDetail;

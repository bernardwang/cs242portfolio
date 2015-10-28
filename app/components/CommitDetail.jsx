// 
//	CommitDetails.jsx
//
//	Single commit details
//

var React = require('react');

var CommitDetail = React.createClass({
	
  render: function() {
		
		// Build list of file changes
		var classname = this.props.show ? 'detail' : 'detail hidden';
		var entry = this.props.entry;
		var changes = entry.changes.map(function(change, i){
     	return (
				<li key={i}>
					<p>{change}</p>
     		</li>
     	)
    });
		
		return (
			<div className={classname}>
				<h3>Revision: {entry.revision}</h3>
				<ul>{changes}</ul>
			</div>
		)
		
  }
});

module.exports = CommitDetail;

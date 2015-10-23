// 
//	CommitHistory.jsx
//
//	Entire commit history component
//

var React = require('react');
var CommitEntry = require('./CommitEntry');

var CommitHistory = React.createClass({
  render: function() {
		
		// Build list of CommitEntry
    var history = this.props.history.map(function(entry, i){
      return (
        <CommitEntry key={i} entry={entry} />
      )
    });

    return (
      <ul className='history'>
				{history}
			</ul>
    )

  }
});

module.exports = CommitHistory;

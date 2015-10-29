// 
//	CommitEntry.jsx
//
//	Single commit entry
//

var React = require('react');
var CommitDetail = require('./CommitDetail');
var CommitThread = require('./CommitThread');

var CommitEntry = React.createClass({
	
	getInitialState: function() {
    return {
      showDetail: false
    };
  },
	
	// Toggles show detail state
	toggleDetail: function(evt) {
    this.setState({ 
			showDetail: !this.state.showDetail
    })
  },
	
  render: function() {
		var entry = this.props.entry;
		
		return (
			<article className='commit'>
				<div className='entry'>
					<h2 className='msg'>{entry.msg}</h2>
					<h3 className='date'>{entry.date}</h3>
					<button className='detail-button' onClick={this.toggleDetail}>Details</button>
					<CommitDetail show={this.state.showDetail} entry={entry} /> 
      	</div>
				<CommitThread id={entry._id} comments={entry.comments} />
			</article>
		)
  }
});

module.exports = CommitEntry;

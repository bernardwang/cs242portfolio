// 
//	CommitEntry.jsx
//
//	Single commit entry component
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
			<li className='entry'>
				<div onClick={this.onClick}></div>
				<p>{this.state.showDetail}</p>
				<h2>{entry.msg}</h2>
				<h3>{entry.date}</h3>
				<button className='detail-button' onClick={this.toggleDetail}>Details</button>
				<CommitDetail show={this.state.showDetail} entry={entry} /> 
				<CommitThread comments={entry.comments} />
      </li>
		)
  }
});

module.exports = CommitEntry;

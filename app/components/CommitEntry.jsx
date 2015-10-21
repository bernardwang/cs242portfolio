// 
//	CommitEntry.jsx
//
//	Single commit entry component
//

var React = require('react');
var CommitDetail = require('./CommitDetail');

var CommitEntry = React.createClass({
	
	getInitialState: function() {
    return {
      showDetail: false
    };
  },
	
	// toggles show detail state
	onToggleClick: function(evt) {
    this.setState({ 
			showDetail: !this.state.showDetail
    })
  },
	
  render: function() {
		var entry = this.props.entry;
		
		// Hides CommitDetail based on state
		return (
			<li className={"entry"}>
				<div onClick={this.onClick}></div>
				<p>{this.state.showDetail}</p>
				<h2>{entry.msg}</h2>
				<h3>{entry.date}</h3>
				<button className={"toggle"} onClick={this.onToggleClick}>Details</button>
				<CommitDetail show={this.state.showDetail} entry={entry} /> 
      </li>
		)
  }
});

module.exports = CommitEntry;

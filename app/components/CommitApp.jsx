// 
//	CommitsApp.jsx
//
//	Main react app component
//

var React = require('react');
var CommitStore = require('../stores/CommitStore');
var CommitHistory = require('./CommitHistory');

var CommitApp = React.createClass({
  
	// initialize state with props, not anti-pattern because no sync necessary
	getInitialState: function() {
    return {
			commits: this.props.initial
		};
  },

	// Add change listeners to stores and initialize stores without api call
  componentDidMount: function() {
		CommitStore.initState(this.props.initial);
    CommitStore.addChangeListener(this._onChange);
  },
	
	// Remove change listers from stores
  componentWillUnmount: function() {
    CommitStore.removeChangeListener(this._onChange);
  },

	// Method to setState based upon Store changes
  _onChange: function() {
    this.setState(getState());
  },
		
	render: function() {
		
		return (
			<CommitHistory history = {this.props.initial}/>
		);
		
  }
});

module.exports = CommitApp;
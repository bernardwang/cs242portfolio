// 
//	CommitsApp.jsx
//
//	Main react app component
//

var React = require('react');
var CommitStore = require('../stores/CommitStore');
var CommitHistory = require('./CommitHistory');
var AppHeader = require('./AppHeader');

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
    this.setState(CommitStore.getState());
  },
		
	render: function() {
		return (
			<div>
				<AppHeader/>
				<main id="app">
					<CommitHistory history = {this.props.initial}/>
				</main>
			</div>
		);
		
  }
});

module.exports = CommitApp;
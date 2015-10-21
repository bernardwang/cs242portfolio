// 
//	CommitsApp.jsx
//
//	Main react app component
//

var React = require('react');
var CommitHistory = require('./CommitHistory');

var CommitsApp = React.createClass({
 
	render: function() {
		
		return (
			<CommitHistory history = {this.props.commits}/>
		);
		
  }
});

module.exports = CommitsApp;
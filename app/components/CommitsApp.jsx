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
			<div className="react-app">
				<CommitHistory history = {this.props.commits}/>
			</div>
		);	
  }
});

module.exports = CommitsApp;
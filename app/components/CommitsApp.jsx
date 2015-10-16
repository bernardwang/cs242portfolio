// 
//	CommitsApp.jsx
//
//	Main react app component
//

var React = require('react');

var CommitsApp = React.createClass({
  render: function() {
		return (
			<div className="react-app">
				<p>{this.props.test}</p>
			</div>
		);	
  }
});

module.exports = CommitsApp;

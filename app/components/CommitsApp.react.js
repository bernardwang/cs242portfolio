var React = require('react');

module.exports = CommitsApp = React.createClass({
	
	render: function(){
		return (
			<div className="commits-app">
				<Commits commit={this.state.commits}/>
			</div>
		);	
	}
	
});
// 
//	CommitThread.jsx
//
//	Commit comment thread
//

var React = require('react');
var ThreadComment = require('./ThreadComment');
var ThreadForm = require('./ThreadForm');
var ThreadActions = require('../actions/ThreadActions');

var CommitThread = React.createClass({
  		
	getInitialState: function() {
		return {
      count: this.props.comments.length
    };
	},
	
	incrementState: function() {
		this.setState({
      count: count + 1
    });	
	},
	
	decrementState: function() {
		if(this.state.count > 0) {
			this.setState({
      	count: count - 1
    	});	
		}
	},
	
	submitCommentAction: function(text) {
		thread_id = this.props.id;
		ThreadActions.submitComment(thread_id, text);
		this.incrementState;
  },
	
	deleteCommentAction: function(event) {
		thread_id = this.props.id;
		decrementState();
	},
		
	render: function() {
		var comments = this.props.comments;
		// Problem with the 'this' keyword, using CommitThread temporarily
		var threadComments = comments.map(function(comment, i){
  		return (
				<li key={i}>
					<ThreadComment deleteAction={CommitThread.deleteCommentAction} comment={comment} />
    		</li>
    	)
  	});
		
    return (
			<div className='comments'>
      	<ul>
					{threadComments}
				</ul>
				<ThreadForm submitAction={this.submitCommentAction}/>
			</div>
    )

  }
});

module.exports = CommitThread;

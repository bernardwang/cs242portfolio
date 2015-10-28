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
      count: this.state.count + 1
    });	
	},
	
	decrementState: function() {
		if(this.state.count > 0) {
			this.setState({
      	count: this.state.count - 1
    	});	
		}
	},
	
	submitCommentAction: function(text) {
		var thread_id = this.props.id;
		ThreadActions.submitComment(thread_id, text);
		//this.incrementState();
  },
	
	deleteCommentAction: function(comment_id) {
		var thread_id = this.props.id;
		ThreadActions.deleteComment(thread_id, comment_id);
		//this.decrementState();
	},
		
	render: function() {
		var comments = this.props.comments;
		var deleteAction = this.deleteCommentAction;
		var submitAction = this.submitCommentAction;
		
		var threadComments = comments.map(function(comment, i){
  		// Using 'CommitThread' instead of 'this' keyword
			return (
				<li key={i}>
					<ThreadComment deleteAction={deleteAction} comment={comment} />
    		</li>
    	)
  	});
		
    return (
			<div className='comments'>
      	<ul>
					{threadComments}
				</ul>
				<ThreadForm submitAction={submitAction}/>
			</div>
    )

  }
});

module.exports = CommitThread;

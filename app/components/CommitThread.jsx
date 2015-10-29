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
	
	submitCommentAction: function(text) {
		var thread_id = this.props.id;
		ThreadActions.submitComment(thread_id, text);
  },
	
	deleteCommentAction: function(comment_id) {
		var thread_id = this.props.id;
		ThreadActions.deleteComment(thread_id, comment_id);
	},
		
	render: function() {
		var comments = this.props.comments;
		var submitAction = this.submitCommentAction;
		var deleteAction = this.deleteCommentAction;
		
		var threadComments = comments.map(function(comment, i){
  		// Using 'CommitThread' instead of 'this' keyword
			return (
				<li key={i}>
					<ThreadComment deleteAction={deleteAction} comment={comment}/>
    		</li>
    	)
  	});
		
    return (
			<div className='thread'>
      	<ul>
					{threadComments}
				</ul>
				<ThreadForm submitAction={submitAction}/>
			</div>
    )

  }
});

module.exports = CommitThread;

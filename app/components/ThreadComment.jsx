// 
//	ThreadComment.jsx
//
//	Single comment
//

var React = require('react');

var ThreadComment = React.createClass({
	
	// Some reason must use onDelete in the button onClick
	// or else will get $.ajax undefined error
	// Look into it later
	onDelete: function(event) {
		var deleteAction = this.props.deleteAction;
		var comment_id = this.props.comment._id;
		deleteAction(comment_id);
	},
	
  render: function() {
		
		return (
			<div className='comment'>
				<p>{this.props.comment.text}</p>
				<button onClick={this.onDelete}>X</button>
			</div>
		)
		
  }
});

module.exports = ThreadComment;

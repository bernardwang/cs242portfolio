// 
//	ThreadComment.jsx
//
//	Single comment
//

var React = require('react');

var ThreadComment = React.createClass({
	
  render: function() {
		var deleteAction = this.props.deleteAction;
		var comment = this.props.comment;
		
		return (
			<div className='comment'>
				<p>{comment.text}</p>
				<button onClick={deleteAction(comment.id)}>X</button>
			</div>
		)
		
  }
});

module.exports = ThreadComment;

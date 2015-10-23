// 
//	Comment.jsx
//
//	Thread comment component
//

var React = require('react');

var CommitComment = React.createClass({
	
  render: function() {
		
		var comment = this.props.comment;
		
		return (
			<div className='comment'>
				<p>{comment.text}</p>
			</div>
		)
		
  }
});

module.exports = CommitComment;

// 
//	ThreadComment.jsx
//
//	Single comment
//

var React = require('react');

var ThreadComment = React.createClass({
	
  render: function() {
		
		var comment = this.props.comment;
		
		return (
			<div className='comment'>
				<p>{comment.text}</p>
			</div>
		)
		
  }
});

module.exports = ThreadComment;

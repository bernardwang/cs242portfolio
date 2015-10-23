// 
//	CommitThread.jsx
//
//	Commit comment thread
//

var React = require('react');
var ThreadComment = require('./ThreadComment');
var ThreadForm = require('./ThreadForm');

var CommitThread = React.createClass({
  render: function() {
		
		var comments = this.props.comments;
		var threadComments = comments.map(function(comment, i){
     	return (
				<li key={i}>
					<ThreadComment comment={comment} />
     		</li>
     	)
    });

    return (
			<div className='comments'>
      	<ul>
					{threadComments}
				</ul>
				<ThreadForm/>
			</div>
    )

  }
});

module.exports = CommitThread;

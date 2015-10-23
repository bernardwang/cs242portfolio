// 
//	CommitThread.jsx
//
//	Commit comment thread
//

var React = require('react');
var CommitComment = require('./CommitComment');

var CommitThread = React.createClass({
  render: function() {
		
		var comments = this.props.comments;
		var commentThread = comments.map(function(comment, i){
     	return (
				<li key={i}>
					<CommitComment comment={comment} />
     		</li>
     	)
    });

    return (
			<div>
      	<ul className='comments'>
					{commentThread}
				</ul>
			</div>
    )

  }
});

module.exports = CommitThread;

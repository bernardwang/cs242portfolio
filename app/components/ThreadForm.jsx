// 
//	ThreadForm.jsx
//
//	Commenting form input
//

var React = require('react');

var ThreadForm = React.createClass({
	
  render: function() {
		
		return (
			<form>
  			<input type='text' placeholder='Solid commit dude!'>
				<input type="submit" value="Comment">
			</form>
		)
		
  }
});

module.exports = ThreadComment;

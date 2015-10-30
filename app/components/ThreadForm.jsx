// 
//	ThreadForm.jsx
//
//	Commenting form input
//

var React = require('react');

var ThreadForm = React.createClass({
	
	onSubmit: function(event) {
		event.preventDefault();
		var text = this.refs.text.value.trim();
		if(text){
			var submitAction = this.props.submitAction;
			submitAction(text);
			this.refs.text.value = '';
		}
	},
	
  render: function() {
		
		return (
			<form className='form' onSubmit={this.onSubmit}>
  			<input type='text' placeholder='Great commit Bernard!' ref='text'/>
				<input type='submit' value='Post'/>
			</form>
		)
		
  }
});

module.exports = ThreadForm;

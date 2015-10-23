// 
//	ThreadForm.jsx
//
//	Commenting form input
//

var React = require('react');

var ThreadForm = React.createClass({
	
	getInitialState: function() {
    return {text: ''};
  },
	
	updateText: function(event) {
    this.setState({
			text: event.target.value
		});
		console.log(this.state.text);
  },
	
	submitText: function(event) {
		
  },
	
  render: function() {
		
		return (
			<form className='form' onSubmit={this.submitText}>
  			<input type='text' onChange={this.updateText} placeholder='Great commit Bernard!'/>
				<input type='submit' value='Submit'/>
			</form>
		)
		
  }
});

module.exports = ThreadForm;

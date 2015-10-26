var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var $ = require('jQuery');

// Actions object
var ThreadActions = {
	
  // Add item to commit thread
  submitComment: function(thread_id, text) {
		
		$.ajax({
    	url: 'http://localhost:3000/api/commits/'+thread_id,
    	type: 'PUT',
    	data: { text: text },
    	success: function(data) { 
				alert('PUT completed'); 
				ThreadDispatcher.handleAction({
      	actionType: ThreadConstants.COMMENT_SUBMIT,
					id: thread_id,
					data: data
    		})	
			}
		});
  },

};

module.exports = ThreadActions;
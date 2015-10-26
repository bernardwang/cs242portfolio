// 
//	ThreadActions.js
//
//	Creates comment thread actions
//

var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var $ = require('jQuery');

// Ajax helper function for REST api calls
var baseURL = 'http://localhost:3000/api/commits/';
var ajaxWrapper = function(url, type, data, callback) {
	$.ajax({
    url: url,
    type: type,
    data: data,
    success: callback
	});
}

// Actions object
var ThreadActions = {
	
  // Add item to commit thread
  submitComment: function(thread_id, text) {
		var url = baseURL+thread_id;
		var data = { text: text };
		ajaxWrapper(url, 'PUT', data, function(data){
			ThreadDispatcher.handleAction({
      	actionType: ThreadConstants.COMMENT_SUBMIT,
				id: thread_id,
				data: data
    	});	
		});
	},
	
	deleteComment: function(thread_id, comment_id) {
		var url = baseURL+thread_id;
		var data = { id: comment_id };
	}

};
module.exports = ThreadActions;
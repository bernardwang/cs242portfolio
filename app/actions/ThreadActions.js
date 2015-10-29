// 
//	ThreadActions.js
//
//	Creates comment thread actions
//

var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');
var ajaxWrapper = require('../utils/ajaxWrapper');

// Ajax helper function for REST api calls
// 3000 for local dev, 3001 for browser-sync
var baseURL = 'http://localhost:3001/api/commits/';

// Actions object
var ThreadActions = {
	
  // Add item to commit thread
  submitComment: function(thread_id, text) {
		var url = baseURL+thread_id+'/comments/';
		var data = { text: text };
		ajaxWrapper(url, 'POST', data, function(res) {
			ThreadDispatcher.handleAction({
      	actionType: ThreadConstants.COMMENT_SUBMIT,
				id: thread_id,
				data: res
    	});	
		});
	},
	
	deleteComment: function(thread_id, comment_id) {
		var url = baseURL+thread_id+'/comments/'+comment_id;
		ajaxWrapper(url, 'DELETE', null, function(res) {
			ThreadDispatcher.handleAction({
      	actionType: ThreadConstants.COMMENT_DELETE,
				id: thread_id,
				data: comment_id
    	});	
		});
	}

};
module.exports = ThreadActions;
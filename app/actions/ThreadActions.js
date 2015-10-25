var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');

// Actions object
var ThreadActions = {

  // Add item to commit thread
  submitComment: function(thread_id, text) {
    ThreadDispatcher.handleAction({
      actionType: ThreadConstants.COMMENT_SUBMIT,
			id: thread_id,
			data: text
    })
  },

};

module.exports = ThreadActions;
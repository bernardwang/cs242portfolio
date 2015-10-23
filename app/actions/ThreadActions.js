var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var ThreadConstants = require('../constants/ThreadConstants');

// Define actions object
var FluxCartActions = {

  // Add item to cart
  addComment: function(,update) {
    AppDispatcher.handleAction({
      actionType: ThreadConstants.COMMENT_ADD,
      update: update
    })
  },

};

module.exports = FluxCartActions;
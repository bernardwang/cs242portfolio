var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var ThreadDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
ThreadDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = ThreadDispatcher;
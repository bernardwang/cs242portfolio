var Dispatcher = require('flux').Dispatcher;

var ThreadDispatcher = new Dispatcher();

// Handle dispatch requests from view
ThreadDispatcher.handleAction = function(action) {
  this.dispatch({
    source: 'VIEW_ACTION',
    action: action
  });
}

module.exports = ThreadDispatcher;
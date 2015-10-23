var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var EventEmitter = require('events').EventEmitter;
var ThreadConstants = require('../constants/ThreadConstants');
var assign = require('object-assign');

var _commits = {};
var _comments = [];

// Method to load product data from mock API
function initCommits(data) {
}

function addComment(text) {
  // Using the current timestamp in place of a real id.
  var id = Date.now();
  _commits[id] = {
    id: id,
    text: text
  };
}

var CommitStore = assign({}, EventEmitter.prototype, {
	
	// Inits commit state
	initState: function(initial) {
		_commits = initial;
	},
	
	// Return Product data
 	getState: function() {
 	  return _commits;
 	},	
	
 	// Emit Change event
 	emitChange: function() {
 	  this.emit('change');
 	},	
	
 	// Add change listener
 	addChangeListener: function(callback) {
 	  this.on('change', callback);
 	},	
	
 	// Remove change listener
 	removeChangeListener: function(callback) {
 	  this.removeListener('change', callback);
 	}
});

ThreadDispatcher.register(function(payload) {
  var action = payload.action;
  var text;

  switch(action.actionType) {

    case ThreadConstants.COMMENT_ADD:
      addComment(action.data);
      break;

    default:
      return true;
  }

  // If action was responded to, emit change event
  CommitStore.emitChange();

  return true;

});

module.exports = CommitStore;
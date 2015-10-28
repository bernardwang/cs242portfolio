// 
//	CommitStore.js
//
//	Manages application state of commits
//

var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var EventEmitter = require('events').EventEmitter;
var ThreadConstants = require('../constants/ThreadConstants');
var assign = require('object-assign'); // to assign event emitter to commitstore
var Comment = require('../models/Comment');

var _commits = [];

// Adds comment to specifed thread
function submitComment(thread_id, commit) {
	// quick and dirty loop
	// consider replacing commits array with map of objects
	for(var i = 0; i < _commits.length; i++) {
		if(_commits[i].hasOwnProperty('_id')) {
			if(_commits[i]['_id'] == thread_id) {
				_commits[i] = commit;
			}
		}
	}
}

// Removes comment from specifed thread
function deleteComment(thread_id, comment_id) {
	alert('doesnt do anything yet');
}

// Emitted action callbacks
ThreadDispatcher.register(function(payload) {
	var action = payload.action;

  switch(action.actionType) {

		// COMMENT_SUBMIT
    case ThreadConstants.COMMENT_SUBMIT:
			submitComment(action.id, action.data);
      break;
			
		// COMMENT_DELETE
    case ThreadConstants.COMMENT_DELETE:
			deleteComment(action.id, action.data);
      break;
			
    default:
      return true;
  }

  // Emit change event
  CommitStore.emitChange();
  return true;
});


// Store functions
var CommitStore = assign({}, EventEmitter.prototype, {
	
	// Initializes commit state
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

module.exports = CommitStore;
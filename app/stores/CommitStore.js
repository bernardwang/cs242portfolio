var ThreadDispatcher = require('../dispatcher/ThreadDispatcher');
var EventEmitter = require('events').EventEmitter;
var ThreadConstants = require('../constants/ThreadConstants');
var assign = require('object-assign');
var Comment = require('../models/Comment');

var _commits = [];
var _comments = [];

function addComment(id, data) {
  // Using the current timestamp in place of a real id.
  //var id = Date.now()
	var commit = _commits;
	alert(commit);
	var comment = commit.comments.create({
    _id: Date.now(),
    text: data
  }, function(err, result) {
			if(err) {
				alert('Error creating comment');
			}
		print(result);
		_commits[id].comments.append(result)
	});
}

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

ThreadDispatcher.register(function(payload) {
	var action = payload.action;

  switch(action.actionType) {

		// COMMENT_ADD
    case ThreadConstants.COMMENT_SUBMIT:
			addComment(action.id, action.data);
      break;
			
    default:
      return true;
  }

  // If action was responded to, emit change event
  CommitStore.emitChange();

  return true;

});

module.exports = CommitStore;
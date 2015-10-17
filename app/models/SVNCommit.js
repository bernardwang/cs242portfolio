//
//	SVNCommit.js
//
//	Mongoose schema used in MongoDB
//

var mongoose = require('mongoose');
var xmltojs = require('xml2js');
var fs = require('fs');

var svnCommit = new mongoose.Schema({
	revision	: Number,
	msg				: String,
	date			: String,
	changes		: [String,String]
});

svnCommit.statics.storeCommits = function(err, callback) {
	
};

/**
 * Returns list of commits from database
 */
svnCommit.statics.getCommits = function(err, callback) {
  var commits = [];
	Commit.find(function(err, res) {
  	if(err) {
			console.log('Error getting commits');
			callback(err);
		}
    commits = res;
		callback(null, commits);
	});
};

module.exports = SVNCommit = mongoose.model('SVNCommit', svnCommit);

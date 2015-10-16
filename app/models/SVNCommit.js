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

/**
 * Returns list of parsed commits
 */
var parseCommits = function(err, data, callback) {
	var commits = [];
	var svn_log = data['log']['logentry'];
	for(var i = 0; i < svn_log.length; i++) {
		var paths = [];
		var curr = svn_log[i];
		var curr_paths = curr['paths'][0]['path'];
		for(var p = 0; p < curr_paths.length; p++) {
			paths.push([curr_paths[p]['_'],curr_paths[p]['$']['kind']]);
		}
		var commit = {
			revision	: curr['revision'],
			msg				: curr['msg'],
			date			: curr['date'],
			changes		: paths
  		};
		commits.push(commit);
	}
	callback(null, commits);
}

/**
 * Returns xml2js parser
 */
var parseXML = function(err, file, callback) {
	var parser = new xmltojs.Parser();
	parser.parseString(file, function(err, data) {
		if(err) {
			console.log('Error parsing log xml');
			callback(err);
		}
		callback(null, data);
	});
}

/**
 * Returns file handler
 */
var openXML = function(err, path, callback) {
	fs.readFile(path, function(err, file) {
		if(err) {
			console.log('Error reading log file');
			callback(err);
		}
		callback(null, file);
	});
}

/**
 * Returns list of commits loaded from specified file
 */
svnCommit.statics.loadCommits = function(err, path, callback) {	
	if(err) {
		callback(err);	
	}
	openXML(null, path, function(err, file){
		if(err) {
			callback(err);
		}
		parseXML(null, file, function(err, data){
			if(err) {
				callback(err);
			}
			parseCommits(null, data, function(err, commits){
				if(err) {
					callback(err);
				}
				callback(null, commits);
			});
		});
	});
}

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

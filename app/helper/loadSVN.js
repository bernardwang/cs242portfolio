//
//	loadXML.js
//
//	helper file for loading svn commits from file
//

var xmltojs = require('xml2js');
var fs = require('fs');

/**
 * Returns list of parsed commits
 */
var parseCommits = function(err, data, callback) {
	var commits = [];
	var svn_log = data['log']['logentry'];
	for(var i = 0; i < svn_log.length; i++) {
		// parse commit changes
		var paths = [];
		var curr = svn_log[i];
		var curr_paths = curr['paths'][0]['path'];
		for(var p = 0; p < curr_paths.length; p++) {
			paths.push([curr_paths[p]['_'],curr_paths[p]['$']['kind']]);
		}
		// initialize commit object with array of changes
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
 * Returns list of commits loaded from specified xml file
 */
var loadCommits = function(err, path, callback) {	
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

module.exports = loadCommits;
var mongoose = require('mongoose');
var xmltojs = require('xml2js');
var fs = require('fs');

var commit = new mongoose.Schema({
	revision	: Number,
	msg				: String,
	date			: String,
	changes		: [String,String]
});

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

var parseXML = function(err, file, callback) {
	var parser = new xmltojs.Parser();
	parser.parseString(file, function(err,data) {
		if(err) {
			console.log('Error parsing log xml');
			callback(err);
		}
		callback(null, data);
	});
}

var openXML = function(err, path, callback) {
	fs.readFile(path, function(file) {
		if(err) {
			console.log('Error reading log file');
			callback(err);
		}
		callback(null, file);
	});
}

commit.statics.loadCommits = function(err, path, callback) {	
	if(err){
		callback(err);	
	}
	openXML(path, function(err, file){
		if(err) {
			callback(err);
		}
		parseXML(file, function(err, data){
			if(err) {
				callback(err);
			}
			parseCommits(data, function(err, commits){
				if(err) {
					callback(err);
				}
				callback(null, commits);
			});
		});
	});
}

commit.statics.getCommits = function(callback) {
  var commits = [];
	callback(commits);
	/*Commit.find(function(err, res) {
  	if (err) {
			// error mesg
		}
    commits = res;
		callback(commits);
	});
	*/
};

module.exports = Commit = mongoose.model('Commit', commit);

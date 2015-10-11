var mongoose = require('mongoose');

var schema = new mongoose.Schema({
	id       	: String,
	revision	: Number,
	msg				: String,
	date			: String,
	paths			: [String]
});

schema.statics.getCommits = function(callback) {

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

//
//	Commit.js
//
//	Mongoose schema used in MongoDB
//

var mongoose = require('mongoose');

var CommitSchema = new mongoose.Schema({
	_id				: Number,
	msg				: String,
	date			: String,
	changes		: [[String,String]]
});

CommitSchema.statics.storeCommits = function(err, data, callback) {
	//for(var i = 0, var len = myArray.length; i < len; i++) {
	if(err) {
			
	}
	data.forEach(function(item){
		console.log(item._id);
		Commit.create({
			_id				: item._id,
			msg				: item.msg,
			date			: item.date,
			changes		: item.changes  
		}, function(err, todo) {
			if(err) {
				callback(err);
			}
		});
	});	
};

/**
 * Returns list of commits from database
 */
CommitSchema.statics.getCommits = function(err, callback) {
	if(err) {
			
	}
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

/**
 * Deletes entire database contents
 */
CommitSchema.statics.deleteCommits = function(err, callback) {
	Commit.find().remove().exec();
};

module.exports = Commit = mongoose.model('Commit', CommitSchema);
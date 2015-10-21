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
	changes		: [String]
});


/**
 * Returns list of commits from database
 */
CommitSchema.statics.storeCommits = function(err, data, callback) {
	data.forEach(function(item){
		Commit.create({
			_id				: item._id,
			msg				: item.msg,
			date			: item.date,
			changes		: item.changes  
		}, function(err) {
			if(err) {
				callback(err);
			}
		});
	});	
	callback(null);
};

/**
 * Returns list of commits from database
 */
CommitSchema.statics.getCommits = function(err, num, callback) {
	var query = Commit.find().limit(num);
	query.exec(function(err, res) {
  	if(err) {
			callback(err);
		}
		callback(null, res);
	});
};

/**
 * Deletes entire database contents
 */
CommitSchema.statics.deleteCommits = function(err, callback) {
	Commit.find().remove().exec(); // nukes db, pretty lazy
	callback(null);
};

var Commit = mongoose.model('Commit', CommitSchema);
module.exports = Commit;
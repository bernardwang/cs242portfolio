//
//	Commit.js
//
//	Mongoose schema for commit entry
//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Comment = require('./Comment');

var CommitSchema = new Schema({
	order			: Number,
	revision	: Number,
	msg				: String,
	date			: String,
	changes		: [String],
	comments	: [Comment]
});

/**
 * Stores commits to database
 */
CommitSchema.statics.storeCommits = function(err, data, callback) {
	data.forEach(function(item){
		Commit.create({
			order			: item.order,
			revision	: item.revision,
			msg				: item.msg,
			date			: item.date,
			changes		: item.changes,
			comments	: []
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
	Commit
	.find({}) 
	.sort({'order': 1})
	.limit(num)
	.exec(function(err, res) {
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

/**
 * Deletes entire database contents
 */
var Commit = mongoose.model('Commit', CommitSchema);
module.exports = Commit;
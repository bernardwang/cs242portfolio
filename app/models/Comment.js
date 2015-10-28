//
//	Comment.js
//
//	Sub-document schema for comments
//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	id		: String,
	text	: String
});

module.exports = CommentSchema;
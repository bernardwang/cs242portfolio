//
//	Comment.js
//
//	Sub-document schema for comments
//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	comment_id	: String,
	text				: String
});

module.exports = CommentSchema;
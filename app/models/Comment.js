//
//	Comment.js
//
//	Sub-document schema for comments
//

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
	_date			: String,
	user			: String,
	text			: String
});

module.exports = CommentSchema;
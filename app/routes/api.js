//
//	api.js
//	
//	RESTful api for commits
//

var Commit = require('../models/Commit');	
var Comment = require('../models/Comment');	

module.exports = function(app) {
	
	// Add comment to commit
	app.put('/api/commits/:id', function(req, res) {
  	Commit.findById( req.params.id, function(err, commit) {
			if(err) {
      	res.send(err);
			}	
			// Append new comment sub document
			var comment = commit.comments.create({
				comment_id	: Date.now(),
				text				: req.body.text
			});
			commit.comments.push(comment);
			
			// Save to db
			commit.save(function(err) {
      	if(err) {
					res.send(err);
				}
				res.json(commit);
			});
    });
  }); 
    
 
}
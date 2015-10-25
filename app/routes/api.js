//
//	api.js
//	
//	RESTful api for commits
//

///// api routes /////
var Commit = require('../models/Commit');	
var Comment = require('../models/Comment');	

module.exports = function(app) {
    
    // add comment to commit
    app.put('/api/commits/:id', function(req, res) {
        Commit.findById( req.param('id'), function(err, commit) {
            if(err) {
                res.send(err);
						}
					 res.send(err);
            //commit.comments.append()
           
        });
    }); 
    
 
}
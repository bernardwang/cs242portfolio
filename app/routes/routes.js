var JSX = require('node-jsx').install();
var React = require('react');
var CommitsApp = require('../components/CommitsApp.react');
var Commit = require('../models/Commit');		

module.exports = {
	index: function(req, res) {
		
		var path = __dirname+'/../data/svn_log.xml';
		Commit.loadCommits(null, path, function(err, commits){
			if(err){
				console.log("Error loading commit");
				return;
			}
			
		});
		
		/*// Render React to a string, passing in our fetched tweets
		var markup = React.renderComponentToString(
			CommitsApp({
				commits: commits
			})
		);
		
		// Render our 'home' template
		res.render('home', {
			markup: markup, // Pass rendered react markup
			state: JSON.stringify(commits) // Pass current state to client side
		});
		
		/*Commit.getCommits(function(commits) {
    	// Render React to a string, passing in our fetched tweets
    	var markup = React.renderComponentToString(
				CommitsApp({
      		commits: commits
    		})
   		);
		
    	// Render our 'home' template
    	res.render('home', {
    		markup: markup, // Pass rendered react markup
      	state: JSON.stringify(commits) // Pass current state to client side
    	});
		
  	});*/
	}
} 
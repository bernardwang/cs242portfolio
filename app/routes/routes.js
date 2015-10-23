//
//	routes.js
//	
//	Routes, views, data controller
//

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Babel = require("babel/register");
var CommitApp = React.createFactory(require('../components/CommitApp'));
var Commit = require('../models/Commit');	
var loadXML = require('../utils/loadXML');

// Deletes database, and repopulates from xml file
var reloadDB = function() {
	Commit.deleteCommits(null, function(err) {
		if(err){
			console.log('Error deleting commits');
			return;
		}
		var path = __dirname+'/../data/svn_log.xml';
		loadXML(null, path, function(err, commits){
			if(err){
				console.log("Error loading commits from xml");
				return;
			}
			Commit.storeCommits(null, commits, function(err) {
				if(err){
					console.log("Error storing commit");
					return;
				}
			});
		});
	});
}

module.exports = {
	index: function(req, res) {
		// Pass commits as parameter and render CommitsApp component to string
		var numQuery = 10;
		Commit.getCommits(null, numQuery, function(err, commits){
			var markup = ReactDOMServer.renderToString(
				CommitApp({ initial : commits })
			);
			// Render home handlebars template
			res.render('home', {
				markup: markup, // Pass rendered react markup
				state: JSON.stringify(commits) // Pass current state to client side
			});
		});
		
	}
} 
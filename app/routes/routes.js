//
//	routes.js
//	
//	Routes, views, data controller
//

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var Babel = require("babel/register");
var CommitsApp = React.createFactory(require('../components/CommitsApp'));
var Commit = require('../models/Commit');	
var loadXML = require('../utils/loadXML');

module.exports = {
	index: function(req, res) {
		
		/*
		// Deletes database, and repopulates from xml file
		Commit.deleteCommits(null, function(err) {
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
		*/
			
		// Pass commits as parameter and render CommitsApp component to string
		Commit.getCommits(null, function(err, commits){
			var markup = ReactDOMServer.renderToString(
				CommitsApp({ commits : commits })
			);
			// Render home handlebars template
			res.render('home', {
				markup: markup, // Pass rendered react markup
				//state: JSON.stringify(commits) // Pass current state to client side
			});
		});
		
	}
} 
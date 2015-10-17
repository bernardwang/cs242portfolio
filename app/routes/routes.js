//
//	routes.js
//	
//	Routes, views, data controller
//

var React = require('react');
var ReactDOMServer = require('react-dom/server');
var JSX = require('node-jsx').install({ extension: ".jsx" });
var CommitsApp = React.createFactory(require('../components/CommitsApp'));
var Commit = require('../models/Commit');	
var loadXML = require('../helper/loadXML');

module.exports = {
	index: function(req, res) {
		
		// Gets and stores commits from xml file
		/*var path = __dirname+'/../data/svn_log.xml';
		loadXML(null, path, function(err, commits){
			if(err){
				console.log("Error loading commits from xml");
				return;
			}
			Commit.storeCommits(null, commits, function(err) {
				if(err){
					console.log(err);
					console.log("Error storing commit");
					return;
				}
			});
		});*/
			
			

		/*	// Pass commits as parameter and render CommitsApp component to string
			var markup = ReactDOMServer.renderToString(
				CommitsApp({ commits : commits })
			);
		
			// Render home handlebars template
			res.render('home', {
				markup: markup, // Pass rendered react markup
				//state: JSON.stringify(commits) // Pass current state to client side
			});
		});*/
		
	}
} 
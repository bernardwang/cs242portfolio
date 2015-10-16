//
//	routes.js
//	
//	Routes, views, data controller
//

var JSX = require('node-jsx').install({ extension: ".jsx" });
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var CommitsApp = React.createFactory(require('../components/CommitsApp'));
var Commit = require('../models/Commit');		

module.exports = {
	index: function(req, res) {
		
		// Gets commits from xml file
		var path = __dirname+'/../data/svn_log.xml';
		Commit.loadSVN(null, path, function(err, svnCommits){
			if(err){
				console.log("Error loading commit");
				return;
			}

			// Pass commits as parameter and render CommitsApp component to string
			var markup = ReactDOMServer.renderToString(
				CommitsApp({ commits : svnCommits })
			);
		
			// Render home handlebars template
			res.render('home', {
				markup: markup, // Pass rendered react markup
				//state: JSON.stringify(commits) // Pass current state to client side
			});
		});
		
	}
} 
//
//	app.js
//
//	Client side React rendering

var React = require('react');
var CommitsApp = require('./components/CommitsApp.react');

// Snag the initial state that was passed from the server side
//var initialState = JSON.parse(document.getElementById('initial-state').innerHTML)

// Render the components, picking up where react left off on the server
React.renderComponent(
  //<CommitsApp commits={initialState}/>,
	//<CommitsApp teststate={initialState}/>,
  //document.getElementById('react-app')
);
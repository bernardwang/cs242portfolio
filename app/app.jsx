//
//	app.js
//
//	Client side React rendering

var React = require('react');
var ReactDOM = require('react-dom');
var CommitApp = require('./components/CommitApp');

// Get initial state that was passed from the server side
var script = document.getElementById('initial-state');
var initialState = JSON.parse(script.innerHTML);

// Remove element used to pass initial state
script.parentNode.removeChild(script);

// DOM node react component will be added to
var mountNode = document.getElementById('react-app');

// Render the app, picking up where react left off on the server
ReactDOM.render(
	<CommitApp initial = {initialState}/>, mountNode
);
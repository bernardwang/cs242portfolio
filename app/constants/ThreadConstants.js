var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
	COMMIT_INIT: null,	// initialize CommitStore on page load
	COMMENT_ADD: null,	// add comment to a CommitThread
});
'use strict';

const spawn = require('child_process').spawn;

let backendServer;
let frontednServer;

// Start the server
try {
	backendServer = spawn('node', ['./backend/bin/www']);
} catch (err) {
	console.log('Couldn\'t start the back end server. Did you run ./config.sh?');
	console.error(err);
	throw err;
}

// Start ember static server
try {
	const frontendServer = spawn('ember', ['s'], {
	    cwd: './frontend'
	});
} catch(err) {
	console.log('Couldn\'t start the front end server. Did you run ./config.sh?');
	console.error(err);
	throw err;
}

const express = require('express') 	
const app = express();				

// create a middleware
function aMiddleware(request, response, next) {
	console.log('middleware is working here');
	next();
}

// Apply the middleware
app.get('/', aMiddleware, function(request, response) {
	response.end('Welcome to express');
});

app.listen('3000', function() {
	console.log('App is running on port 3000');
});

//step 1
const express = require('express') 	
// step 2
const app = express();				

// step 3
app.get('/', function(request, response) {
	response.end('Welcome to express');
});

// step 4
app.listen('3000', function() {
	console.log('App is running on port 3000');
});

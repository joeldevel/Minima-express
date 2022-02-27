const express = require('express');
const app = express();
const fs = require('fs'); // from node core modules

app.get('/', function(request, response) {
    fs.readFile('./index.html', 'utf8', (err, data) => {
        if(err) throw err;
        return response.send(data);
    });
});

app.get('/cities', function(request, response) {
    fs.readFile('./cities.html', 'utf8', (err, data) => {
        if(err) throw err;
        return response.send(data);
    });
});

app.get('/weather', function(request, response) {
    fs.readFile('./weather.html', 'utf8', (err, data) => {
        if(err) throw err;
        return response.send(data);
    });
});

app.listen(3000,()=>console.log('App listening on port 3000'));

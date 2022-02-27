const express = require('express');
const app = express();

let cities = {
	"Buenos Aires": {
		"population": 3000000
	},
	"Lisbon": {
		"population": 4000000
	},
	"Rome": {
		"population": 800000
	},
	"Toulouse": {
		"population": 200000
	}
};

app.use(express.static('public'));

app.get('/cities/:city', function(req, res) {
    const city = req.params.city.toString().trim();
	let template = `
		<h1>name: #name</h1>
		<h2>population: #population</h2>
		<h3></h3>
		<a href="/cities.html">go back</a>
	`;
	if(!city) res.end('bad city, go back <a href="/cities.html">to cities</a>');
	try {
		let page = template.replace('#name', city)
					.replace('#population', cities[city].population);
		res.send(page);

	} catch(e) {
		res.send('that city does not exist. <a href="/cities.html">go back</a>');
	}
});


app.listen(3000,()=>console.log('App listening on port 3000'));

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

app.set('view engine', 'pug');

app.use(express.static('public'));

app.get('/cities/:city', (req, res) => {
	try {
	res.render('city',
		{
			name: req.params.city,
			population: cities[req.params.city].population
		})
	} catch {
		res.render('city', {error: "city not found"});
	}
});

app.listen(3000,()=>console.log('App listening on port 3000'));

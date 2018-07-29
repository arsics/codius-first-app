
// Load any dependencies
const express = require('express');
const app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use res.render to serve our index page on URL root / GET request
app.get('/', function(req, res) {
	res.render('pages/index');
});

// Make our server listen for requests on port 1337
app.listen(1337);
console.log('1337 is the best port');
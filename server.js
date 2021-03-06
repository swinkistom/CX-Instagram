var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();


//tell node whre to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');

//configure instagram app with cleinht-id and secret

ig.use({
	client_id: 'xxxx',
	client_secret: 'xxx'
});



//ROUTES

// home page route - popular images
app.get('/', function(req, res) {
	// use the instagram package to get popular media
	ig.tag_media_recent('cyclocross',(function(err, medias, remaining, limit) {
		// render the home page and pass in the popular images
		res.render('pages/index', { grams: medias });
	}));
});



//Start the Server

app.listen(8080);
console.log("App started. Look at localhost:8080")


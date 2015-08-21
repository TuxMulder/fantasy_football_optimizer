//TODO: refactor split out responsibilities - auth, routes and chat
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(require('body-parser').json());

app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));



app.get('/test', function (req, res) { 
	//res.sendFile(__dirname + '/test.html');
	res.sendFile(__dirname + '/public/test.html');
});

app.get('/', function (req, res){
  res.sendFile(__dirname +'/public/summary.html');
});


app.post('/pharmacies', function (req, res) {
	/*Pharmacy.find({ loc: { $near: { $geometry: {type: 'Point', coordinates: [ req.body.lat, req.body.long ] }, $maxDistance: 5000 } } })
		.select('Name')
		.select('Address1')
		.select('Address2')
		.select('Address3')
		.select('Address4')
		.select('PostCode')
		.select('Tel')
		.select('loc')
		.limit(5)
		.exec(function (err, pharmacies) {
			if(err){
				console.log(err);
				return next(err);
			}
			if(!pharmacies){
				return res.status(403);
			}
			return res.status(200).json(pharmacies)
		});*/
});





http.listen(4000, function(){
	console.log('listening on *:4000');
});


function contains (a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}
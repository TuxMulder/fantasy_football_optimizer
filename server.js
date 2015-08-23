//TODO: refactor split out responsibilities - auth, routes and chat
var express = require('express');
var app = express();
var http = require('http').Server(app);
app.use(require('body-parser').json());

app.use(express.static(__dirname + '/public'));
app.use('/components', express.static(__dirname + '/components'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));

var players = require('./models/Player');
var pointsAgainst = require('./models/PointsAgainstTeam');
var posPoints = require('./models/PositionPoints');

app.get('/PointsAgainst', function (req, res) {
	pointsAgainst.find(function (err, against) {
		if(err){
			console.log(err);
			return next(err);
		}
		if(!against){
			return res.status(403);
		}
		res.status(200).json(against);
	}).sort({value: -1});
});

app.get('/gems', function (req, res) {
	players.find(
		{
			type_name: req.query.position, 
			total_points: { $gt: req.query.points },
			selected_by_percent: { $lt: req.query.select}
		},
		'web_name total_points selected_by_percent',
		function (err, player) {
		if(err) {
			console.log(err);
			return next(err);
		}
		if(!player) {
			return res.status(403);
		}
		res.status(200).json(player);
	}).sort({ total_points: -1 }).limit(5);
});



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
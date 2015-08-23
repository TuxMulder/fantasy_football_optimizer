var db = require('../dbFantasyFootball');

var pointsAgainst = db.Schema({
		_id: String, 
		value: Number
	}, 
	{
		collection: 'points_against'
	});

module.exports = db.model('points_against', pointsAgainst);
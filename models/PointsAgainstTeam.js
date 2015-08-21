var db = require('../dbFantasyFootball');

var pointsAgainst = db.Schema({
		_id: String, 
		value: Number
	}, 
	{
		collection: 'against'
	});

module.exports = db.model('against', pointsAgainst);
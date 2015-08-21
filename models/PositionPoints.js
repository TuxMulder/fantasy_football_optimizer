var db = require('../dbFantasyFootball');

var poinstPosition = db.Schema({
		_id: String
	}, 
	{
		collection: 'avg_points_position'
	});

module.exports = db.model('avg_points_position', poinstPosition);
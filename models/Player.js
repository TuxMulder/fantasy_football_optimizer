var db = require('../dbFantasyFootball');

var player = db.Schema({
	type_name: String,
	total_points: Number,
	selected_by_percent: Number,
	web_name: String
});

module.exports = db.model('players', player);
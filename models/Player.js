var db = require('../dbFantasyFootball');

var player = db.Schema({
	type_name: String
});

module.exports = db.model('players', player);
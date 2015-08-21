var fantasyFootball = require('mongoose');
fantasyFootball.connect('mongodb://localhost/fantasy_football/', function () {
	console.log('mongodb connected to fantasy football database');
});
module.exports = fantasyFootball;
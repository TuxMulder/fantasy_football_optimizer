<?php

$m = new MongoClient();

$db = $m->fantasy_football;

$players = $db->players;

$players->update(array('id' => 1), getPlayer());


$cursor = $players->find();

foreach($cursor as $doc) {
	printOut($doc["web_name"]);
}


function getPlayer() {
	printOut("getting player");
	return json_decode(file_get_contents("/var/www/html/fantasyFootball/MongoTest/player_1.json"), true);
}

function printOut($msg) {
	echo "$msg\n";
}
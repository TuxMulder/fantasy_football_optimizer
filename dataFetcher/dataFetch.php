<?php

$maxIds = 600;

for ($id = 1; $id <= $maxIds; $id++) { 
	$player = getPlayerData($id);
	if($player !== "") {
		writePlayerData($id, $player);
	}
}

function getPlayerData($id) {
	$url = "http://fantasy.premierleague.com/web/api/elements/$id/";
	$playerData = file_get_contents($url);

	if($playerData !== FALSE) {
		return $playerData;
	}

	return "";
}

function writePlayerData($id, $player) {
	$writer = fopen("data/player_$id.json", "w");
	$writer.fwrite($writer, $player);
	fclose($writer);
}


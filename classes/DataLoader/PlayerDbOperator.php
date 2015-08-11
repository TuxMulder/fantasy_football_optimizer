<?php

class PlayerDbOperator {

	private $playerCollection;

	public function __construct() {
		$mongoClient = new MongoClient(); //parameter less, to connect on localhost
		$this->playerCollection = $mongoClient->fantasy_football->players;
	}

	public function InsertPlayer($player) {
		$this->playerCollection->insert($player);
	}

	public function UpdatePlayer($match, $player) {
		$this->playerCollection->update($match, $player);
	}
}
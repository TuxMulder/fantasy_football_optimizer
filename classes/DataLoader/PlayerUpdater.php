<?php

class DataUpdater {
	private $playerDb;
	private $fileOperator;

	public function __construct(\PlayerDbOperator $playerDb, \PlayerFileOperator $fileOperator) {
		$this->playerDb = $playerDb;
		$this->fileOperator = $fileOperator;
	}

	public function UpdatePlayers() {
		foreach ($this->fileOperator as $player) {
			if($player) {
				$this->UpdatePlayer($player);				
			}
		}
	}

	private function UpdatePlayer($player) {
		$match = array('id' => $player['id']);
		$this->playerDb->UpdatePlayer($match, $player);
	}
	
}
<?php

class PlayerLoader {

	private $playerDb;
	private $fileOperator;

	public function __construct(\PlayerDbOperator $playerDb, \PlayerFileOperator $fileOperator) {
		$this->playerDb = $playerDb;
		$this->fileOperator = $fileOperator;
	}

	public function LoadPlayers() {
		foreach ($this->fileOperator as $player) {
			if($player){
				$this->LoadPlayerIntoDb($player);
			}
		}
	}

	private function LoadPlayerIntoDb($player) {
		$this->playerDb->InsertPlayer($player);
	}
}
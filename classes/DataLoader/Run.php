<?php

include 'PlayerDbOperator.php';
include 'PlayerFileOperator.php';
include 'PlayerUpdater.php';
include 'PlayerLoader.php';

// a script to run the updating and loading of player data into mongo

if(!isset($argv[1])) {
	printError();
}

$dbOperator = new \PlayerDbOperator();
$fileOperator = new \PlayerFileOperator('../../dataFetcher/data');


if($argv[1] === '-l') {
	$playerLoader = new \PlayerLoader($dbOperator, $fileOperator);
	$playerLoader->LoadPlayers();
}
else if($argv[1] === '-u') {
	$playerUpdater = new \PlayerUpdater($dbOperator, $fileOperator);
	$playerUpdater->UpdatePlayers();
}
else {
	printError();
}


function printError() {
	echo "Invalid arguments! Correct usage: Run.php [-l | -u]\n";
}
<?php

class PlayerFileOperator implements Iterator {
	private $directoryIterator;

	public function __construct($dataDirectory) {
		$this->directoryIterator = new DirectoryIterator($dataDirectory);
	}

	public function current() {
		$file = $this->directoryIterator->current();
		if(!$file->isDot()) {
			return $this->LoadPlayerFromFile("{$file->getPath()}/{$file->getFilename()}");
		}

		$this->next();
		if($this->valid()){
			return $this->current();
		}
		return null;
	}

	public function key() {
		$this->directoryIterator->key();
	}

	public function next() {
		$this->directoryIterator->next();

	}

	public function rewind() {
		$this->directoryIterator->rewind();
	}

	public function valid() {
		return $this->directoryIterator->valid();
	}


	private function LoadPlayerFromFile($file) {
		return json_decode(file_get_contents($file), true);
	}
}
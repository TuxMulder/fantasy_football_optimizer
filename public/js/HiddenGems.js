(function () {
	'use strict';
	angular
		.module('app')
		.controller('GemsCtrl', HiddenGemsController);

	function HiddenGemsController() {
		var vm = this;
		vm.testOptions = {
            min: 0,
            max: 100,
            step: 10,
            precision: 2,
            orientation: 'horizontal',  // vertical
            handle: 'round', //'square', 'triangle' or 'custom'
            tooltip: 'show', //'hide','always'
            tooltipseparator: ':',
            tooltipsplit: false,
            enabled: true,
            naturalarrowkeys: false,
            range: false,
            ngDisabled: false,
            reversed: false
    	};

    	vm.range = true;

        vm.model = 0

        vm.value = vm.testOptions.min + vm.testOptions.step;
            

        vm.prefix = 'Current value: ';
        vm.suffix = '%';

        vm.stopped = Stopped();

	}

	function Stopped () {
		//alert('stopped');
	}

	/*function Formater(value) {
		return value + "%";
	}*/
})();
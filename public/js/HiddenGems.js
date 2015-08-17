(function () {
	'use strict';
	angular
		.module('app')
		.controller('GemsCtrl', HiddenGemsController);

		function HiddenGemsController() {
			alert('got here');
			var vm = this;
			vm.sliders = {};
			vm.sliders.sliderValue = 50;

			vm.testOptions = {
				min: 0,
				max: 100,
				step: 1
			};
			vm.myFormater = Formater(value);
		}

		function Formater(value) {
			return value + "%";
		}
})();
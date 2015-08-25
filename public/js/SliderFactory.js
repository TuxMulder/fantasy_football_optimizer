(function () {
	'use strict';
	angular
		.module('app')
		.factory('SliderFactory', SliderFactory);

	function SliderFactory () {
		var sliderId =0;
		alert('slider');

		function create (min, max, step) {
			var slider = {
				min: min,
				max: max,
				step: step,
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
	            reversed: false,
	            sliderId: sliderId++
			};

			return slider;
		}

		function invokeSuccessCallback (invokeSuccessCallback, slider) {
			if(typeof successCallback === 'function') {
				successCallback(slider);
			}
		}

		function createByOptions (min, max, step, successCallback) {
			alert('createByOptions');
			var slider = create(min, max, step);
			invokeSuccessCallback(successCallback, slider);
		}

		return { createByOptions: createByOptions };
	}
})();
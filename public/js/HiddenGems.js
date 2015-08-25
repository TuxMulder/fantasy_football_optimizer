(function () {
	'use strict';
	angular
		.module('app')
		.controller('GemsCtrl', HiddenGemsController);

	function HiddenGemsController(SliderFactory) {
		var vm = this;
            
        vm.createSlider = function ( min, max, step) {
            alert('hello');
            var tempSlider;
            SliderFactory.createByOptions(min, max, step, function (slider){
                tempSlider = slider;
            });
            return tempSlider;
        }

        //vm.prefix = 'Current value: ';
        //vm.suffix = '%';

        //vm.stopped = Stopped();
		vm.pointsSlider = vm.createSlider(, 0, 100, 5);

        vm.pointsModel = 0;
        vm.pointsValue = vm.pointsSlider.min + vm.pointsSlider.step;
    }

	





	/*function Formater(value) {
		return value + "%";
	}*/
})();
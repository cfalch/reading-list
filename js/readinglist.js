(function() {
	var app = angular.module('reading-list', []);

	app.directive("angControllerTest", function() {
		return {
			restrict: 'E',
			template: '<h3>Angular Controller Test -- Successful!</h3>'
		};
	})

})();
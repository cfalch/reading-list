(function() {
	var app = angular.module('reading-list', []);

	app.directive("angControllerTest", function() {
		return {
			restrict: 'E',
			template: '<h3>Angular Controller Test -- Successful!</h3>'
		};
	})

	/**
	 * The controler for  getting the book list, and then getting the
	 * data for each book. It should delegate to factories for the actual calls.
	 */
	app.controller('ListController', function($http) {
		var params = {
			email: 'phate08@gmail.com',
			password: 'wunderful'
		},
		httpObj = {
            method: 'jsonp',
            url: 'http://api.wunderlist.com',
            params: weatherSearchObj
        };
	});


	/**
	 * The factory for getting the book list from Wunderlist.
	 */
	app.factory('ListFetcher', function($http) {

	});
	
	/**
	 * The fatory for getting the book data from Amazon.
	 */
	app.factory('BookFetcher', function($http) { 

	});

})();
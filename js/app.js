var rico = angular.module('rico', ['ngRoute', 'ricoControllers']);

rico.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/bem-vindo', {
			templateUrl: 'views/0-bem-vindo.html',
			controller: 'mainController'
		}).
		when('/apresentacao', {
			templateUrl: 'views/1-apresentacao.html',
			controller: 'mainController'
		}).
		when('/objetivo', {
			templateUrl: 'views/2-objetivo.html',
			controller: 'mainController'
		}).
		when('/valor-objetivo', {
			templateUrl: 'views/3-valor-objetivo.html',
			controller: 'mainController'
		}).
		when('/valor-inicial', {
			templateUrl: 'views/4-valor-inicial.html',
			controller: 'mainController'
		}).
		when('/valor-mensal', {
			templateUrl: 'views/5-valor-mensal.html',
			controller: 'mainController'
		}).
		when('/tempo', {
			templateUrl: 'views/6-tempo.html',
			controller: 'mainController'
		}).
		when('/resultado', {
			templateUrl: 'views/7-resultado.html',
			controller: 'mainController'
		}).
		otherwise({
			redirectTo: '/bem-vindo'
		});
}]);

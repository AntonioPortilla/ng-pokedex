//Creamos una funcion que se llame así misma
(function(){
	//en el array van las edpendencias del modulo
	var app = angular.module('pokedex',
		[
			'ngRoute',
			'pokedex.controllers',
			'pokedex.directives',
			'pokedex.filters',
			'pokedex.services'
		]);

	app.config(['$routeProvider', function($r){
		$r
		.when('/', {
			templateUrl: 'views/pokedex.html',
			controller: 'PokedexController'
		})
		.when('/:type', {
			templateUrl: 'views/pokedex.html',
			controller: 'PokedexController'
		})
		.when('/pokemon/:name', {
			templateUrl: 'views/main.html',
			controller: 'PokemonController'
			//controllerAs: 'pokeCtrl'
		})
		.otherwise({ redirectTo: '/' })
	}]);

})();

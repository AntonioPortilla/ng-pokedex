//Creamos una funcion que se llame así misma
(function(){
	//en el array van las edpendencias del modulo
	var app = angular.module('pokedex',
		[
			//'ngRoute',
			'pokedex.controllers',
			'pokedex.directives',
			'pokedex.filters'
		]);
})();

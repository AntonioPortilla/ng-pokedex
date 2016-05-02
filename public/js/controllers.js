(function(){
	angular.module('pokedex.controllers', [])
	.controller('PokemonController', ['$scope', '$routeParams', 'pokeService', function($scope, $routeParams, pokeService){
		/*$scope.pokemon = {
			id 			: '001',
			name 		: 'Charmander',
			specie 		: 'Seed Pokemon',
			type 		: ['Grass', 'Poison', 'Fire'],
			width 		: '1.5kg',
			height 		: "2'5",
			abilities 	: ['Rayo', 'Trueno'],
			stats		: //caracteristicas
			{
				hp 			: 45,
				attack 		: 49,
				defense		: 49,
				"sp.atk"	: 65, //sp= especial
				"sp.def"	: 70,
				speed		: 45,
				total		: 323
			},
			evolution	: ['Charmander', 'Charmeleon', 'Charizard']
		};*/
		var name = $routeParams.name;
		$scope.pokeService = {};

		//pokeService.byName('pikachu')
		pokeService.byName(name)
		.then(function(data){
			$scope.pokemon = data;
		});
	}])
	.controller('TabsController', function(){
		this.tab = 1;

		this.selectTab = function(tab){
			this.tab = tab;
		};
	})
	.controller('PokedexController', ['$scope', '$routeParams','pokeService', function($scope, $routeParams, pokeService){
		//console.log('nuevo controlador, pokedex 2016');
		var type = $routeParams.type;
		/*$scope.pokemons = [];

		$http.get('/pokemons.json')
			.success(function(data){
				$scope.pokemons = data;
			});*/
	if(type) {
		pokeService.byType(type).then(function(data) {
			$scope.pokemons = data;
		});
	} else {
		pokeService.all().then(function(data){ //si se cumple la funcion, se cumple la promesa
			$scope.pokemons = data;
		});
	}

	}]);
})();
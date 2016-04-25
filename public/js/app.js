//Creamos una funcion que se llame así misma
(function(){

	var app = angular.module('pokedex', []);
	
	app.controller('PokemonController', function(){
		this.pokemon = {
			id 			: 001,
			name 		: 'pikachu',
			specie 		: 'Seed pokemon',
			type 		: ['Grass', 'Poison'],
			width 		: '1.5kg',
			height 		: "2'5",
			abilities 	: ['Rayo', 'Trueno']
		};
	});

})();

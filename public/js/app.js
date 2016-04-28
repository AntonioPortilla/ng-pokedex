//Creamos una funcion que se llame así misma
(function(){

	var app = angular.module('pokedex', []);

	app.controller('PokemonController', function(){
		this.pokemon = {
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
		};
	});

	app.controller('TabsController', function(){
		this.tab = 1;

		this.selectTab = function(tab){
			this.tab = tab;
		};
	});

	app.controller('CommentsController', function(){
		this.comments = [];
		this.comment = {}; //objeto literal de javascript
		this.show = false;

		this.toggle = function(){
			this.show = !this.show; //boleano
		};

		this.anonymousChanged = function(){
			if(this.comment.anonymous){
				this.comment.email = "";
			};
		};

		this.addComment = function(){
			this.comment.date = Date.now();
			this.comments.push(this.comment);
			this.comment = {}; //limpiar o setear los comoentarios
		};
	});

	app.filter('imageify', function(){
		return function(input){
			var url = "images/pokemons/" + input.toLowerCase() + ".jpg";
			return url;
		};
	});

})();

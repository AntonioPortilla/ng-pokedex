(function(){
	angular.module('pokedex.filters', [])
	.filter('imageify', function(){
		return function(input){
			var url = "images/pokemons/" + input.toLowerCase() + ".jpg";
			return url;
		};
	});
})();
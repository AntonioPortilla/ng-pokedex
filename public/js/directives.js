(function(){
	angular.module('pokedex.directives', [])
	.directive('pokemonImagen', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-imagen.html'
		};
	})
	.directive('pokemonNombre', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-nombre.html'
		};
	})
	.directive('pokemonData', function () {
		return { //retornamos el objeto literal de javascript
			restrict: 'E', //indicamos que es html
			templateUrl: 'partials/pokemon-data.html'
		};
	})
	.directive('pokemonEstadisticas', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-estadisticas.html'
		};
	})
	.directive('pokemonEvolucion', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-evolucion.html'
		};
	})
	.directive('pokemonComentario', function () {
		return {
			restrict: 'E', //A no muestra,
			templateUrl: 'partials/pokemon-comentario.html',
			controller: function(){
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
			},
			controllerAs: 'comCtrl'
		};
	});
})();
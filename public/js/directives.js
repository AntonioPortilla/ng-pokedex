(function(){
	angular.module('pokedex.directives', [])
	.directive('pokeImg', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/poke-img.html'
		};
	})
	.directive('pokeName', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/poke-name.html'
		};
	})
	.directive('pokemonType', function () {
		return {
			restrict: 'E',
			templateUrl: 'partials/pokemon-type.html'
		};
	})
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
	.directive('pokemonComentario', ['pokeService', function (pokeService) {
		return {
			restrict: 'E', //A no muestra, tipo Elemento
			templateUrl: 'partials/pokemon-comentario.html',
			scope: {
				name: '@name'
			},
			link: function(scope, element, attributes){
				attributes.$observe('name', function(value){
					if(value){
						scope.name = name,
						scope.comments = pokeService.getComments(value);
					}

				});
			},
			controller: function($scope){
				$scope.comments = [];
				$scope.comment = {}; //objeto literal de javascript
				$scope.show = false;

				$scope.toggle = function(){
					$scope.show = !$scope.show; //boleano
				};

				$scope.anonymousChanged = function(){
					if($scope.comment.anonymous){
						$scope.comment.email = "";
					};
				};

				$scope.addComment = function(){
					$scope.comment.date = Date.now();
					pokeService.saveComment($scope.name, $scope.comment);
					$scope.comments = pokeService.getComments($scope.name);
					//$scope.comments.push($scope.comment);
					$scope.comment = {}; //limpiar o setear los comoentarios
				};
			}
			//controllerAs: 'comCtrl'
		};
	}]);
})();
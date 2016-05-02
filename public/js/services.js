(function(){
	angular.module('pokedex.services', [])
	.factory('pokeService', ['$http', '$q', '$filter', '$window', function ($http, $q, $filter, $window){
		var normalize 		= $filter('normalize');
		var localStorage 	= $window.localStorage;

		function all(){ //permite obtener todos los pokemons
			var deferred = $q.defer(); //objeto deferido con el metodo $q
			$http.get('/pokemons.json')
			.success(function (data) {
				deferred.resolve(data);
			});
			return deferred.promise;
		}

		function byName(name){ //busqueda por nombre
			name = normalize(name); //parametro de entrada del pokemon
			var deferred = $q.defer(); //definimos nuestro objeto defirido
			all().then(function(data){  //me entrega los datos para poder trabajar con ellos
				var res = data.filter(function(pokemon){
					return normalize(pokemon.name) === name;
				});
				if (res.length > 0) { //por lo menos un elemento
					deferred.resolve(res[0]);
				} else {
					//no encontre el elemento
					//rechaza la promesa
					deferred.reject();
				} //con las promesas resolvemos cuando encuentra resultado o cuando falla
			});
			return deferred.promise;
		}

		function byType(type){
			type = normalize(type);
			var deferred = $q.defer();

			all().then(function(data){
				var rpta = data.filter(function(pokemon){ //filter es funcion de javascript
					return pokemon.type.some(function(t){ //si se cumple almenos uno
						return normalize(t) === type; //normalizamos el tipo
					});
				});

				deferred.resolve(rpta);
			});

			return deferred.promise;
		}

		function saveComment(pokemon, comment){
			var comments = getComments(pokemon);

			comments.push(comment);
			localStorage.setItem(pokemon, JSON.stringify(comments));
		}

		function getComments(pokemon){
			var comments = localStorage.getItem(pokemon);

			if(!comments){
				comments = [];
			} else {
				comments = JSON.parse(comments);
			}
			return comments;
		}

		return{
			all 		: all,
			byName		: byName,
			byType		: byType,
			saveComment	: saveComment,
			getComments	: getComments
		};
	}]);
})();
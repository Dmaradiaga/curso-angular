
(function(){

		var eventos = angular.module("EventosApp", []);

		eventos.controller("controladorManejadorEventos", controladorManejadorEventos)
		eventos.controller("controladorGenerandoEvento", controladorGenerandoEvento)

		controladorManejadorEventos.$inject = ["$rootScope"]

		function controladorManejadorEventos($rootScope)
		{
				var _this = this;

				$rootScope.$on("generandoEvento", function(evento, data){

						console.log("Evento: ", evento)
						console.log("Datos: ", data)

						var total = _this.sumaTotal(data.datos);
						$rootScope.$broadcast("datosProcesado", { total:total })

				})

				_this.sumaTotal = function(arreglo)
				{
					var total = 0;

						for(var ii=0; ii<arreglo.length; ii++)
						{
								total += arreglo[ii];
						}

						return total
				}
		}

		controladorGenerandoEvento.$inject = ["$rootScope"]

		function controladorGenerandoEvento($rootScope)
		{
				var _this = this;

				_this.generarEvento = function()
				{
					  $rootScope.$broadcast("generandoEvento", { datos:[23,234,23,32,3,10] } )
				}

				$rootScope.$on("datosProcesado", function(evento, data){

						console.log(evento)
						_this.total = data.total;
				})
		}


}())
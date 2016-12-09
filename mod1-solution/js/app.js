
(function(){

		var miapp = angular.module("LunchCheck", []);

		miapp.controller("LunchCheckController", LunchControllerFunction);

		LunchControllerFunction.$inject = ["$scope"]

		function LunchControllerFunction($scope){

				$scope.userData = {};

				$scope.clickme = function()
				{
						alert("HELLO WORLD")
				}
		}
})()
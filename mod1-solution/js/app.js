
(function(){

		var miapp = angular.module("LunchCheck", []);

		miapp.controller("LunchCheckController", LunchControllerFunction);

		LunchControllerFunction.$inject = ["$scope"]

		function LunchControllerFunction($scope){

				$scope.userData.text_value = "";
		}
})()
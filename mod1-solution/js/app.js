
(function(){

		var miapp = angular.module("LunchCheck", ["ngMaterial"]);

		miapp.controller("LunchCheckController", LunchControllerFunction);

		LunchControllerFunction.$inject = ["$scope"]

		function LunchControllerFunction($scope){

				$scope.msg = "";

				$scope.userData = {};

				$scope.clickme = function()
				{
						if(!$scope.userData.someText)
						{
							  $scope.error = true;
							  $scope.nice = false;
							  $scope.msg = "Please enter data first"
							  return
						}
						else{

							 $scope.error = false;
							 $scope.nice = true;
							 $scope.items = $scope.userData.someText.split(",");
						

							 if($scope.items.length<=3)
							 {
							 		$scope.msg = "Enjoy!"
							 }
							 else{

							 	  $scope.msg = "Too much!"
							 }
						}	


				}
		}
})()
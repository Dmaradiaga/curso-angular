
(function(){

		var miapp = angular.module("ShoppingItems", []);

		miapp.controller("toBuyCtrl",toBuy);
		miapp.controller("alreadyBoughtCtrl",alreadyBought);
		miapp.service("ItemService", ItemService);


		toBuy.$inject = ["$scope", "ItemService"]
		alreadyBought.$inject = ["$scope", "ItemService"]


		function toBuy($scope, ItemService)
		{
						$scope.items = ItemService.getItemsToBuy();

						$scope.empty = function()
						{
									if($scope.items.length==0)
									{
											 return true;
									}
						}

						$scope.buyItem = function(index) {

										ItemService.buyItem(index);
						}

		}

		 function alreadyBought($scope, ItemService)
		 {

							$scope.items = ItemService.getItemsAlreadyBought();
							$scope.empty = function()
							{
											if($scope.items.length>0)
											{
														return true
											}
							}


		 }

		 function ItemService()
		 {
			    var itemsToBuy = [
									{
									name: "Cookies",
									quantity: 10
								},
									{
									name: "Sodas",
									quantity: 3
								},
									{
									name: "Ice Cream",
									quantity: 2
								},
									{
									name: "Chewing Gum",
									quantity: 8
								},
									{
									name: "Water",
									quantity: 5
								},
					 ];

					var itemsAlreadyBought = [];


			 		   function getItemsToBuy()
						 {
							  		return itemsToBuy;

						 };

						 function buyItem(index)
						 {
							       itemsAlreadyBought.push(itemsToBuy.splice(index, 1)[0])
						 }

						 function getItemsAlreadyBought()
						 {
										return itemsAlreadyBought
						 }


						return {

							   getItemsToBuy: getItemsToBuy,
								 getItemsAlreadyBought: getItemsAlreadyBought,
								 buyItem: buyItem
						}
		 }


})()

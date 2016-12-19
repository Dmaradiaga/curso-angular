
(function(){

  'use strict'
		var miapp = angular.module("ShoppingItems", []);

		miapp.controller("toBuyCtrl",toBuy);
		miapp.controller("alreadyBoughtCtrl",alreadyBought);
		miapp.service("ItemService", ItemService);


		toBuy.$inject = ["ItemService"]
		alreadyBought.$inject = ["ItemService"]


		function toBuy(ItemService)
		{
					var _this = this;

					 _this.items = ItemService.getItemsToBuy();

						_this.empty = function()
						{
									if(_this.items.length==0)
									{
											 return true;
									}
						}

						_this.buyItem = function(index) {

										ItemService.buyItem(index);
						}

		}

		 function alreadyBought(ItemService)
		 {
					    var _this = this;
							_this.items = ItemService.getItemsAlreadyBought();
							_this.empty = function()
							{
											if(_this.items.length>0)
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

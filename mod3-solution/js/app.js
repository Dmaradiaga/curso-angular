
(function(){

  'use strict'
		var miapp = angular.module("NarrowItDownApp", []);

		miapp.controller("NarrowItDownController",NarrowItDownController);
		miapp.service("MenuSearchService", MenuSearchService)
		miapp.constant("API_BASE", "https://davids-restaurant.herokuapp.com")
		miapp.directive("foundItems",FoundItems)

		NarrowItDownController.$inject = ["MenuSearchService"]
		MenuSearchService.$inject = ["$http", "API_BASE"]

		function FoundItems()
		{
				var ddo = {

					templateUrl: 'foundItems.html',
			        scope: {
			          found: '<',
			          onRemove: '&'
			        },
			        controller: NarrowItDownController,
			        controllerAs: 'narrow',
			        bindToController: true
				}

				return ddo;
		}


		function NarrowItDownController(MenuSearchService)
		{
				var _this = this;
				_this.searchTerm = ""
				_this.found = [];
				
				_this.searchItems = function()
				{
						if(!_this.searchTerm)
						{
								_this.status=true;
						}
						else
						{
								var response = MenuSearchService
								.getMatchedMenuItems(_this.searchTerm);
								
								response.then(function(items){

										if(items.length==0)
										{
											_this.searchTerm = "";
											_this.status=true;
										}
										else
										{
											_this.searchTerm = "";
											_this.status=false
											_this.found = items;
											console.log(_this.found)
										}
								})
								.catch(function(error){
										console.log(error)
								})
						}
				}

				_this.removeItem = function(index)
				{
						_this.found.splice(index,1);
				}
				
		}


		function MenuSearchService($http,API_BASE)
		{
				
				var _this = this;

				_this.getMatchedMenuItems = function(searchTerm)
				{
						return $http({

							method:"GET",
							url:API_BASE+"/menu_items.json",

						}).then(function(menuItems){

							return _this.filterSearch(menuItems, searchTerm)
								
						})
				}

				_this.filterSearch = function(menuItems, searchTerm)
				{
						var foundItems = [];
						var items = menuItems.data.menu_items
						items.forEach(function(item){

							if(item.description.indexOf(searchTerm)!=-1)
							{
									foundItems.push(item)
							}
						})

						return foundItems;
				}
				
		}

})()

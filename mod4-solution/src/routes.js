
(function(){

	"use strict"

	angular.module("MenuApp")
	.config(RoutesConfig);

	RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	function RoutesConfig($stateProvider, $urlRouterProvider)
	{
			$stateProvider
			.state("home", {
				url:"/",
				templateUrl:"src/MenuApp/home.template.html"

			})
			.state("categories",{
				url:"/categories",
				templateUrl:"src/DataApp/templates/categories.template.html",
				controller:"CategoriesController as categoriesCtrl",
				resolve:{
					Allcategories:["MenuDataService",function(MenuDataService)
					{
						return MenuDataService.getAllCategories()
								.then(function(allCategories){

									return allCategories;
								}) 
					}]
				}
			})

			.state("items",{
				url:"/items/{itemDetail}",
				templateUrl:"src/DataApp/templates/itemDetail.template.html",
				controller:"ItemDetailController as itemCtrl",
				resolve:{
					itemDetail: ["$stateParams","MenuDataService",
					function($stateParams, MenuDataService){

				 return MenuDataService.getItemsForCategory($stateParams.itemDetail)
						  	.then(function(result)
						  	{
						  		return result;
						  })
					}]
				}
			})


			$urlRouterProvider.otherwise("/")

	}

}())
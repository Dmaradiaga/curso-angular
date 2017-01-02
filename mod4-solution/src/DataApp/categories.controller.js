
(function(){

	"use strict"

	angular.module("data")
	.controller("CategoriesController", CategoriesController);

		CategoriesController.$inject = ["Allcategories"]
		
		function CategoriesController(Allcategories)
		{
				var _this = this;
				_this.allCategories = Allcategories
		}

})()
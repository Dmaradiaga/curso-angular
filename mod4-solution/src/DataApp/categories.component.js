
(function(){
	"use strict"

	angular.module("data")
	.component("categories", {
		templateUrl:"src/DataApp/templates/categorieslist.template.html",
		bindings:{
			categories:'<'
		}
	})

}())
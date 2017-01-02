
(function(){

	"use strict"

	angular.module("data")
	  .component("items", {
			templateUrl:"src/DataApp/templates/itemlist.template.html",
			bindings:{
				items:'<'
			}
		})
}())
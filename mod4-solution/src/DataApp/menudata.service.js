
(function()
{
	"use strict"

     angular.module("data")
     .service("MenuDataService", MenuDataService)

     MenuDataService.$inject = ["$http", "$q"];
     
     function MenuDataService($http, $q)
     {
     			var _this = this;
     			var BASE_API= "https://davids-restaurant.herokuapp.com";

     			_this.getAllCategories = function()
     			{
                             var deferred = $q.defer();
                             $http.get(BASE_API+"/categories.json")
                                     .then(function(result){
                                             deferred.resolve(result.data)
                                     })
                                     .catch(function(result){
                                          deferred.reject(result.data)
                                     })

                            return deferred.promise;      
     			}

     			_this.getItemsForCategory = function(categoryShortName)
     			{
                        var deferred = $q.defer();
                         $http.get(BASE_API+"/menu_items.json?category="+categoryShortName)
                                     .then(function(result){
                                             deferred.resolve(result.data.menu_items)
                                     })
                                     .catch(function(result){
                                          deferred.reject(result.data)
                                     })

                            return deferred.promise;
     			}
     }


}())
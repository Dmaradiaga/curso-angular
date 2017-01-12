
(function(){
  "use strict"
    angular.module("common")
    .service("SignUpService", SignUpService)

      SignUpService.$inject = ["$http", "ApiPath", "$q"]
      function SignUpService($http, ApiPath, $q)
      {
              var _this = this;
              var dataUser = []

              _this.saveInfoUser = function(userData)
              {
                    dataUser.push(userData);
              }

              _this.getUserData = function()
              {
                    return dataUser;
              }

              _this.getItem = function(short_name)
              {
                    var defer = $q.defer()

                    $http.get(ApiPath+"/menu_items.json?category="+short_name)
                    .then(function(datos){
                         defer.resolve(datos.data)
                    })
                    .catch(function(datos){
                        defer.reject(datos.data)
                    })

                    return defer.promise;
              }
      }

})()

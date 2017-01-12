
(function(){
  "use strict"

    angular.module("public")
    .component("menuItems", {
        templateUrl:"src/public/myinfo/list-menu-items.html",
        bindings:{
          items:"<",
          url:'<'
        }
    })
})()

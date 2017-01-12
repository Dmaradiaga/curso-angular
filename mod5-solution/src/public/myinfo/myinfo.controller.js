
(function(){
  "use strict"

    angular.module("public")
    .controller("MyinfoController", MyinfoController)

    MyinfoController.$inject = ["userInfo", "ApiPath"]
    function MyinfoController(userInfo, ApiPath)
    {
            var _this = this;
            _this.url = ApiPath;

            if(userInfo.length!==0)
            {
                angular.forEach(userInfo,function(item){
                     _this.userInfo = item;
                })
                 _this.msg = true
            }
    }

})()

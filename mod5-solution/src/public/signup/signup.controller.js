
(function(){
       angular.module("public")
       .controller("SignUpController", SignUpController)

        SignUpController.$inject = ["SignUpService"]
         function SignUpController(SignUpService)
         {
                var _this = this;
                _this.user = {}
                _this.signup = function()
                {
                      SignUpService.getItem(_this.user.short_name)
                      .then(function(data){
                          _this.user.item = data
                          _this.noitems = false;
                          SignUpService.saveInfoUser(_this.user)
                          _this.saved = true;
                      })
                      .catch(function(data){
                        _this.noitems = true;
                        return false;
                      })

                }

                _this.getItems = function()
                {
                      SignUpService.getItem(_this.user.short_name)
                      .then(function(data){
                            _this.user.item = data
                            _this.noitems = false;
                      })
                      .catch(function(data){
                         _this.noitems = true;
                         return false;
                      })
                }
         }
})()

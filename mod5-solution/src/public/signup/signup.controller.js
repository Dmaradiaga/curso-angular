
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
                          if(data.menu_items.length==0)
                          {
                                _this.noitems = true;
                                return;
                          }
                          else {

                            _this.user.menu_items = data.menu_items
                            _this.noitems = false;
                            SignUpService.saveInfoUser(_this.user)
                            _this.saved = true;
                          }
                      })
                      .catch(function(data){
                         console.log(" ERROR: "+data)
                      })

                }

                _this.getItems = function()
                {
                      SignUpService.getItem(_this.user.short_name)
                      .then(function(data){
                          if(data.menu_items.length==0)
                          {
                              _this.noitems = true;
                          }
                          else {

                            _this.user.menu_items = data.menu_items
                            _this.noitems = false;
                          }
                      })
                      .catch(function(data){
                         console.log("HAY UN ERROR: "+data)
                      })
                }
         }
})()

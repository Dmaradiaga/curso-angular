
(function(){

	angular.module("data")
	.controller("ItemDetailController", ItemDetailController)

	ItemDetailController.$inject = ["itemDetail"]
	function ItemDetailController(itemDetail)
	{
		  var _this = this;
		  _this.itemDetail = itemDetail;
	}
}())
(function () {
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){
	$scope.name = "";

$scope.sayMessage = function (string){

	var array = string.split(",");

	if (array ===undefined){
		console.log(Please enter data first!);
	}

	else if (array <==3){
		console.log(Enjoy your meal!);
	}

	else {
		console.log("Too much!");
	}


}


	
})();


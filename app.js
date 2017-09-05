(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
	$scope.dishes = [];
	
	$scope.checklunch = function (){

		 if($scope.dishes === -1) {
                return "Please enter data first!";
            } 
              if($scope.dishes.split(",").length <= 3) {
                return "Enjoy!";
            } 
            else{
                return "Too Much!";
            }
         }
     
	}
	
})();

// $scope.message1 = "Enjoy!";
// 	$scope.message2 = "Too Much!";
// 	$scope.message3 =  "Please enter data first!";
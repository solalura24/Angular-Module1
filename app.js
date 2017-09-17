(function () {
'use strict';

angular.module('LunchCheckApp', [])

.controller('LunchCheckController',LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope){

	$scope.checkIfTooMuch = function(){	

	if ($scope.foodlist === "" || $scope.foodlist === undefined
            || $scope.foodlist.length === 0)
        {
            $scope.message =  "Please enter food first!";
           
        }
        
        else 
        {
            var InputItems = $scope.foodlist.split(",");
            var stripedList = [];

            for(var i=0, j= InputItems.length; i < j; i++)
            {
                if (InputItems[i].trim() !== "")
                {
                    stripedList.push(InputItems[i]);
                }
            }

            if (stripedList.length <= 3)
            {
                $scope.message =  "Enjoy your lunch!";
                
            }
            else
            {
                $scope.message = "Too much!";
                
            }
        }

    };	

}
	
})();	



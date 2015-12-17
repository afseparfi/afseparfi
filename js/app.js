 var app = angular.module("epa", ["firebase"]);
 app.controller("EPAController", function($scope, $firebaseArray ) {
	 var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");

	 $scope.ratings = $firebaseArray (ref);
	 var list = $firebaseArray(ref);
	 $scope.ratings.$loaded().then(function(data) {
//	 	for (var a = 0;a < data.length; a++) {
//	    	var auto = data[a];
//		   	// do something ?
//	    }
	   //reverse list to show highest mpg on top
	     $scope.ratings.reverse();
	   })
	   .catch(function(error) {
	     console.log("Error:", error);
	   });
	 
	 
	 
	 
 });
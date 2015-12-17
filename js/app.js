 var app = angular.module("epa", ["firebase"]);
 app.controller("EPAController", function($scope, $firebaseArray, $window) {
	 $scope.ratings = JSON.parse($window.localStorage.getItem("eparatings")) ||  [] ;
	 if ($scope.ratings.length == 0) {
		 var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com/ratings");	 
		 $scope.ratings = $firebaseArray(ref);
		 var list = $firebaseArray(ref);
		 $scope.ratings.$loaded().then(function(data) {
			 //reverse list to show highest mpg on top
		     $scope.ratings.reverse();
		     //store locally to avoid database hit
		     $window.localStorage.setItem("eparatings", JSON.stringify($scope.ratings));
		   })
		   .catch(function(error) {
		     console.log("Error:", error);
		   });
	 }
 });
 var app = angular.module("epa", ["firebase"]);
 app.controller("EPAController", function($scope, $firebaseObject) {
	 var ref = new Firebase("https://dazzling-fire-2583.firebaseio.com");
	 // download the data into a local object
	 $scope.data = $firebaseObject(ref);
	 // putting a console.log here won't work, see below
 });
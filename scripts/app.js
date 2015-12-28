var afseparfiApp = angular.module("afseparfiApp", [
    "ngRoute",
    "angular.filter",
    "angular-chartist",
    "firebase",
    "afseparfiControllers",
    "afseparfiServices"
]);

afseparfiApp.config(['$routeProvider',
  function($routeProvider) {
	$routeProvider.
		when('/vehicles', {
			templateUrl: 'views/vehicle-list.html',
			controller: 'VehicleListController'
		}).
		when('/vehicles/:vehicleId', {
			templateUrl: 'views/vehicle-detail.html',
			controller: 'VehicleDetailController'
		}).
		when('/compare/:vehicleOne/to/:vehicleTwo', {
			templateUrl: 'views/vehicle-compare.html',
			controller: 'VehicleCompareController'
		}).
		when('/compare/:vehicleOne/to/:vehicleTwo/and/:vehicleThree', {
			templateUrl: 'views/vehicle-compare.html',
			controller: 'VehicleCompareController'
		}).
		when('/understand-epa-labels', {
			templateUrl: 'views/epa-label.html',
			controller: 'EPALabelController'
		}).
		when('/vehicle-index', {
			templateUrl: 'views/vehicle-index.html',
			controller: 'VehicleIndexController'
		}).
		otherwise({
	        redirectTo: '/vehicle-index'
	      });
}]);
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
			templateUrl: 'partials/vehicle-list.html',
			controller: 'VehicleListController'
		}).
		when('/vehicles/:vehicleId', {
			templateUrl: 'partials/vehicle-detail.html',
			controller: 'VehicleDetailController'
		}).
		when('/compare/:vehicleOne/to/:vehicleTwo', {
			templateUrl: 'partials/vehicle-compare.html',
			controller: 'VehicleCompareController'
		}).
		when('/compare/:vehicleOne/to/:vehicleTwo/and/:vehicleThree', {
			templateUrl: 'partials/vehicle-compare.html',
			controller: 'VehicleCompareController'
		}).
		when('/understand-epa-labels', {
			templateUrl: 'partials/epa-label.html',
			controller: 'EPALabelController'
		}).
		when('/vehicle-index', {
			templateUrl: 'partials/vehicle-index.html',
			controller: 'VehicleIndexController'
		}).
		otherwise({
	        redirectTo: '/vehicle-index'
	      });
}]);
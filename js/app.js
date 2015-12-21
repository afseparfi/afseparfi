var afseparfiApp = angular.module("afseparfiApp", [
    "ngRoute",    
    "firebase",
    "afseparfiControllers"
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
		when('/vehicle-index', {
			templateUrl: 'partials/vehicle-index.html',
			controller: 'VehicleIndexController'
		}).
		otherwise({
	        redirectTo: '/vehicle-index'
	      });
}]);

'use strict';

describe('Controller: VehicleIndexController', function() {
	var scope;
	// load the controller's module
	beforeEach(angular.mock.module('afseparfiApp'));
	//mock the controller and include $rootScope and $controller
    beforeEach(angular.mock.inject(function($rootScope, $controller){
    	//create an empty scope
        scope = $rootScope.$new();
        //declare the controller and inject our empty scope
        $controller('VehicleIndexController', {$scope: scope});
    }));

	it('should have rating defined in the scope', function() {
		expect(scope.ratings).toBeDefined();
	});
	
	it('should have vehicleModels defined in the scope', function() {
		expect(scope.vehicleModels1).toBeDefined();
		expect(scope.vehicleModels2).toBeDefined();
		expect(scope.vehicleModels3).toBeDefined();
	});
	
	it('should retrieve an image for a known vehicleId', function() {
		expect(scope.getImage(36996)).toBe('images/36996.png');
	});
	
	it('should retrieve a default image for an unknown vehicleId', function() {
		expect(scope.getImage(36000)).toBe('images/default-vehicle.png');
	});
});

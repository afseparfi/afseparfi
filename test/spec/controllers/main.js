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
});

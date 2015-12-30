'use strict';

describe('Controller: VehicleIndexController', function () {

  // load the controller's module
  beforeEach(module('afseparfiApp'));

  var VicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    VicCtrl = $controller('VehicleIndexController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));


  it('should have rating defined in the scope', function () {
    expect(VicCtrl.ratings).toBeDefined();
  });
});

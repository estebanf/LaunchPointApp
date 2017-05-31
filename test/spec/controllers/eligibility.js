'use strict';

describe('Controller: EligibilityCtrl', function () {

  // load the controller's module
  beforeEach(module('launchPointAppApp'));

  var EligibilityCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EligibilityCtrl = $controller('EligibilityCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EligibilityCtrl.awesomeThings.length).toBe(3);
  });
});

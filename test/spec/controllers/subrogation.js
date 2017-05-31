'use strict';

describe('Controller: SubrogationCtrl', function () {

  // load the controller's module
  beforeEach(module('launchPointAppApp'));

  var SubrogationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubrogationCtrl = $controller('SubrogationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubrogationCtrl.awesomeThings.length).toBe(3);
  });
});

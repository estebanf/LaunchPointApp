'use strict';

describe('Controller: SubrogatemodalCtrl', function () {

  // load the controller's module
  beforeEach(module('launchPointAppApp'));

  var SubrogatemodalCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SubrogatemodalCtrl = $controller('SubrogatemodalCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SubrogatemodalCtrl.awesomeThings.length).toBe(3);
  });
});

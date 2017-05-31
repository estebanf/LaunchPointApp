'use strict';

describe('Service: fake', function () {

  // load the service's module
  beforeEach(module('launchPointAppApp'));

  // instantiate service
  var fake;
  beforeEach(inject(function (_fake_) {
    fake = _fake_;
  }));

  it('should do something', function () {
    expect(!!fake).toBe(true);
  });

});

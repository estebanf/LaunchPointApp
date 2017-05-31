'use strict';

describe('Service: faker', function () {

  // load the service's module
  beforeEach(module('launchPointAppApp'));

  // instantiate service
  var faker;
  beforeEach(inject(function (_faker_) {
    faker = _faker_;
  }));

  it('should do something', function () {
    expect(!!faker).toBe(true);
  });

});

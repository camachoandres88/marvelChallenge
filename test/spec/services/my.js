'use strict';

describe('Service: my', function () {

  // load the service's module
  beforeEach(module('marvelChallengeApp'));

  // instantiate service
  var my;
  beforeEach(inject(function (_my_) {
    my = _my_;
  }));

  it('should do something', function () {
    expect(!!my).toBe(true);
  });

});

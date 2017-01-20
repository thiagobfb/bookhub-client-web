'use strict';

describe('Service: Category', function () {

  // load the service's module
  beforeEach(module('bookhubClientApp'));

  // instantiate service
  var category;
  beforeEach(inject(function (_category_) {
    category = _category_;
  }));

  it('should do something', function () {
    expect(!!category).toBe(true);
  });

});

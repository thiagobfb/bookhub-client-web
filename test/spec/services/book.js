'use strict';

describe('Service: book', function () {

  // load the service's module
  beforeEach(module('bookhubClientApp'));

  // instantiate service
  var book;
  beforeEach(inject(function (_book_) {
    book = _book_;
  }));

  it('should do something', function () {
    expect(!!book).toBe(true);
  });

});

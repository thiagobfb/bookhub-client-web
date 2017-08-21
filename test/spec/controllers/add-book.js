'use strict';

describe('Controller: AddBookCtrl', function () {

  // load the controller's module
  beforeEach(module('bookhubClientApp'));

  var AddBookCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddBookCtrl = $controller('AddBookCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddBookCtrl.awesomeThings.length).toBe(3);
  });
});

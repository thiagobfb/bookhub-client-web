'use strict';

describe('Controller: TestformCtrl', function () {

  // load the controller's module
  beforeEach(module('bookhubClientApp'));

  var TestformCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TestformCtrl = $controller('TestformCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(TestformCtrl.awesomeThings.length).toBe(3);
  });
});

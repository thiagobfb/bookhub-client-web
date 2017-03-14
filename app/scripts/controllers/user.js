'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:UserCtrl
 * @description
 * # UserCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('UserCtrl', function ($scope, $routeParams, User) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    var userID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    $scope.users = [];

    $scope.getUsers = function () {
      $scope.users = User.query();
      return $scope.users;
    };

    $scope.getUsers();

  });

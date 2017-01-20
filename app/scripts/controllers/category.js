'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('CategoryCtrl', function ($scope, $routeParams, Category) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];
    var categoryID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    $scope.categories = [];

    $scope.getCategories = function () {
      $scope.categories = Category.query();
      return $scope.categories;
    };

    $scope.getCategories();
  });

'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('BookCtrl', function ($scope, Book) {

    $scope.books = Book.query();

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Wordpress'
    ];

    // $scope.getBooks = function () {
    //   $scope.books = Book.query();
    //   return $scope.books;
    // };
  });

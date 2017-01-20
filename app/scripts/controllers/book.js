'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('BookCtrl', function ($scope, $routeParams, Book, Category) {
    var bookID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    $scope.books = [];
    $scope.book = null;
    $scope.selectCategories = [];

    // var original = book.data;
    // original.id = bookID;
    // $scope.book = angular.copy(original);
    // $scope.book.id = bookID;

    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Wordpress'
    ];

    $scope.getBooks = function () {
      $scope.books = Book.query();
      return $scope.books;
    };

    $scope.getBook = function () {
      $scope.book = Book.get({id: bookID});
      $scope.selectCategories = Category.query();
      return $scope.book;
    };

    $scope.updateBook = function () {
      $scope.book.update();
    };

    $scope.getBooks();

    $scope.removeAuthor = function (item) {
      var index = $scope.book.authors.indexOf(item);
      $scope.book.authors.splice(index, 1);
    }
  });

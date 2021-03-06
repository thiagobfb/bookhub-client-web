'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:BookCtrl
 * @description
 * # BookCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('BookCtrl', function ($scope, $routeParams, Book, Category, User) {
    var bookID = ($routeParams.id) ? parseInt($routeParams.id) : 0;
    $scope.books = [];
    $scope.book = [];
    $scope.selectCategories = [];
    $scope.arrayAuthors = [];
    $scope.selectAuthors = [];
    $scope.arrayColaborators = [];
    $scope.selectColaborators = [];

    // var original = book.data;
    // original.id = bookID;
    // $scope.book = angular.copy(original);
    // $scope.book.id = bookID;

    // $scope.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma',
    //   'Wordpress'
    // ];

    $scope.selectAuthors = User.listAllAuthors();
    $scope.selectColaborators = User.listAllColaborators();

    $scope.getBooks = function () {
      $scope.books = Book.query();
      return $scope.books;
    };

    $scope.getBook = function () {
      $scope.book = Book.get({id: bookID});
      $scope.selectCategories = Category.query();
      $scope.arrayAuthors = $scope.book.authors;
      $scope.arrayColaborators = $scope.book.colaborators;
      return $scope.book;
    };

    $scope.updateBook = function (book) {
      // $scope.book = Book.get({id:book.id});
      // $scope.book.name = book.name;
      // $scope.book.content = book.content;
      // alert(JSON.stringify(book));
      Book.update({id: book.id}, book);
    };

    $scope.addBook = function (book) {
      alert(JSON.stringify(book));
      Book.save(book);
    };

    $scope.getBooks();

    $scope.removeAuthor = function (item) {
      var index = $scope.book.authors.indexOf(item);
      $scope.book.authors.splice(index, 1);
    };

    $scope.getAllAuthors = function () {
      $scope.arrayAuthors = $scope.book.authors;
      $scope.selectAuthors = User.listAllAuthors();
      return $scope.selectAuthors;
    };

    $scope.addAuthors = function () {
      $scope.arrayAuthors.forEach(function (author) {
        console.log(author);
      });
    };

    $scope.removeColaborator = function (item) {
      var index = $scope.book.colaborators.indexOf(item);
      $scope.book.colaborators.splice(index, 1);
    };

    $scope.getAllColaborators = function () {
      $scope.arrayColaborators = $scope.book.colaborators;
      $scope.selectColaborators = User.listAllColaborators();
      return $scope.selectColaborators;
    };

    $scope.addColaborators = function () {
      $scope.arrayColaborators.forEach(function (colaborator) {
        console.log(colaborator);
      });
    };

    $scope.loadInitialDataFormAdd = function () {
      $scope.book = {};
      $scope.selectCategories = Category.query();
      $scope.arrayAuthors = $scope.book.authors;
      $scope.arrayColaborators = $scope.book.colaborators;
      // alert("Entrei no formulário teste");
      return $scope.book;
    };

  });

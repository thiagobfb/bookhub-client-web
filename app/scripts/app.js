'use strict';

/**
 * @ngdoc overview
 * @name bookhubClientApp
 * @description
 * # bookhubClientApp
 *
 * Main module of the application.
 */
angular
  .module('bookhubClientApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'btorfs.multiselect'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/book', {
        templateUrl: 'views/book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .when('/book/:id/edit', {
        templateUrl: 'views/edit-book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
        // ,
        // resolve: {
        //   bookData: function (Book, $route) {
        //     return Book.get({id: $route.current.params.id});
        //   }
        // }
      })
      .when('/testform', {
        templateUrl: 'views/testform.html',
        controller: 'TestformCtrl',
        controllerAs: 'testform'
      })
      .when('/book/add-book', {
        templateUrl: 'views/add-book.html',
        controller: 'BookCtrl',
        controllerAs: 'book'
      })
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.hashPrefix('');
  });

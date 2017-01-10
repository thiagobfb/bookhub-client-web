'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('MainCtrl', ['$scope', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.texto = 'Oi estou sendo chamado!!!!';
  }]);

'use strict';

/**
 * @ngdoc function
 * @name bookhubClientApp.controller:TestformCtrl
 * @description
 * # TestformCtrl
 * Controller of the bookhubClientApp
 */
angular.module('bookhubClientApp')
  .controller('TestformCtrl', ['$scope', function ($scope) {
    // this.awesomeThings = [
    //   'HTML5 Boilerplate',
    //   'AngularJS',
    //   'Karma'
    // ];

    $scope.submitForm = function () {
      console.log("Teste Funfa!!!");
      alert("Oi!!!!!")
    };
  }]);

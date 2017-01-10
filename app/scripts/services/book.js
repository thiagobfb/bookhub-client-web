'use strict';

/**
 * @ngdoc service
 * @name bookhubClientApp.book
 * @description
 * # book
 * Factory in the bookhubClientApp.
 */
angular.module('bookhubClientApp')
  .factory('Book', function ($resource) {
    // Service logic
    // ...

    // var meaningOfLife = 42;
    //
    // // Public API here
    // return {
    //   someMethod: function () {
    //     return meaningOfLife;
    //   }
    // };
    var baseUrl = 'http://localhost:8080/books';

    return $resource(
      baseUrl + '/get/:id',
      {
        id: '@id'
      },
      {
        query: {
          method: 'GET',
          url: baseUrl + '/listAll',
          isArray: true
        },
        save: {
          method: 'POST',
          url: baseUrl + '/add'
        },
        update: {
          method: 'PUT',
          params: {id: '@id'},
          url: baseUrl + '/update/:id'
        },
        remove: {
          method: 'DELETE',
          params: {id: '@id'},
          url: baseUrl + '/delete/:id'
        }
      }
    );
  });

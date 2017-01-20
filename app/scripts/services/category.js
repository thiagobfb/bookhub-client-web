'use strict';

/**
 * @ngdoc service
 * @name bookhubClientApp.category
 * @description
 * # category
 * Factory in the bookhubClientApp.
 */
angular.module('bookhubClientApp')
  .factory('Category', function ($resource) {
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

    var baseUrl = 'http://localhost:8080/categories';

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

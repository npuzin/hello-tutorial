'use strict';

angular.module('hello')

  .factory('remote', ['$http', function($http) {


    var insertPerson = function(person) {
      return $http.post('rest/person', person);
    };

    var getPeople = function() {

      return $http.get('rest/person/all');
    };

    return {
      insertPerson: insertPerson,
      getPeople: getPeople
    };
    
  }]);
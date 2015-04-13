'use strict';

angular.module('hello')

  .controller('HelloCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.showContact = false;
    
    $scope.isSayHelloDisabled = function() {

      return !$scope.person ||
        !$scope.person.firstName ||
        $scope.person.firstName.length === 0 ||
        !$scope.person.lastName ||
        $scope.person.lastName.length === 0;
    };

    $scope.sayHello = function() {

      $scope.showContact = true;
      $scope.refresh();
    };

    $scope.again = function() { 

      $scope.person.firstName = '';
      $scope.person.lastName = '';
      $scope.showContact = false;
      $scope.refresh();
    };

    $scope.refresh = function() {

      $http.get('rest/hello').then(function (result) {
        $scope.persons = result.data;
        $scope.persons.forEach(function(person) {

          var datetime = moment(person.sent);
          person.sentFormattedDate = datetime.format('DD/MM/YYYY');
          person.sentFormattedTime = datetime.format('hh:mm:ss');
        })
      });
    };

    $scope.refresh();
    
  }]);
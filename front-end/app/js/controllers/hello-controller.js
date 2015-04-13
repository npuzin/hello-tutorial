'use strict';

angular.module('hello')

  .controller('HelloCtrl', ['$scope', '$http', function($scope, $http) {

    $scope.showContact = false;
    
    $scope.isSayHelloDisabled = function() {

      return !$scope.person ||
        !$scope.person.firstname ||
        $scope.person.firstname.length === 0 ||
        !$scope.person.lastname ||
        $scope.person.lastname.length === 0;
    };

    $scope.sayHello = function() {

      $scope.showContact = true;
      $http.post('rest/person', $scope.person).then(function (result) {
        $scope.refresh();
      });
    };

    $scope.again = function() { 

      $scope.person.firstname = '';
      $scope.person.lastname = '';
      $scope.showContact = false;
      $scope.refresh();
    };

    $scope.refresh = function() {

      $http.get('rest/person/all').then(function (result) {
        $scope.persons = result.data;
        $scope.persons.forEach(function(person) {

          var datetime = moment(person.sent);
          person.sentFormattedDate = datetime.format('DD/MM/YYYY');
          person.sentFormattedTime = datetime.format('HH:mm:ss');
        });
      });
    };

    $scope.refresh();
    
  }]);
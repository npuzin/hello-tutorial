'use strict';

angular.module('hello')

  .controller('HelloCtrl', ['$scope', 'remote', function($scope, remote) {

    $scope.helloText = '';
    
    $scope.isSayHelloDisabled = function() {

      return !$scope.person ||
        !$scope.person.firstname ||
        $scope.person.firstname.length === 0 ||
        !$scope.person.lastname ||
        $scope.person.lastname.length === 0;
    };

    $scope.sayHello = function() {

      $scope.helloText = 'Hello ' + $scope.person.firstname + ' ' + $scope.person.lastname + '!';      
      remote.insertPerson($scope.person).then(function (result) {
        $scope.refresh();
        $scope.person.firstname = '';
        $scope.person.lastname = '';
      });
    };

    $scope.refresh = function() {

      remote.getPeople().then(function (result) {
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
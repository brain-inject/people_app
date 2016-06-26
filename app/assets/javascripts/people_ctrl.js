(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope,$http){
    $scope.setup = function(){
      $http.get("/api/v1/people.json").then(function(response){
        $scope.people = response.data;
      });
    };

    $scope.toggleBioVisible = function(person){
      person.bioVisible = !person.bioVisible
    };

    $scope.addPerson = function(personName, personBio){
      var newPerson = {
        name: personName,
        bio: personBio
      };

      $http.post('/api/v1/people.json', newPerson).then(function(response){
        $scope.people.push(response.data);
        $scope.newName = '';
        $scope.newBio = '';
        $scope.errors = [];
      }, function(error){
        $scope.errors = error.data.errors;
      });
    };

    $scope.deletePerson = function(index){
      $scope.people.splice(index,1);
    };
  });
}());




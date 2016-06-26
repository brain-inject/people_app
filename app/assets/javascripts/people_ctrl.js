(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope,$http){
    $scope.setup = function(){
      $http.get("/api/v1/people.json").then(function(response){
        // console.log(response.data);
        $scope.people = response.data;
      });

    };

    $scope.toggleBioVisible = function(person){
      person.bioVisible = !person.bioVisible
    };

    $scope.addPerson = function(personName, personBio){
      if (personName && personBio){
        var newPerson = {
          name: personName,
          bio: personBio
        };

        $scope.people.push(newPerson);
        $scope.newName = '';
        $scope.newBio = '';
      }
    };

    $scope.deletePerson = function(index){
      $scope.people.splice(index,1);
    };
  });
}());




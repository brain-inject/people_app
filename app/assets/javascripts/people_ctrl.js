(function(){
  "use strict";

  angular.module("app").controller("peopleCtrl", function($scope){
    $scope.people = [
      {
        name: "Popeye",
        bio: "I ams what I am 'cause that's all that I am",
        bioVisible: false
      },{
        name: "Olive Oil",
        bio: "Oh! Popeye",
        bioVisible: false
      },{
        name: "Wimpy",
        bio: "I gladly pay you tomorrow for a hamburger today.",
        bioVisible: false
      }
    ];

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




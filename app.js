var app = angular.module("todo",[]);

app.controller("TodoCtrl", ["$scope", "$window", function($scope, $window){

  $scope.createItem = function(){
    console.log($scope.item.text + " due " + $scope.item.dueDate);
    $scope.items.push($scope.item);

    // clearing input
    $scope.item = { text: "",
                dueDate: new Date(),
                completed: false };
    // $window.alert('something pops up');
  };

  $scope.items = [
  { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false },

  { text: "Get more stuff from the store",
  dueDate: new Date(),
  completed: false },

  { text: "Get even more stuff from the store",
                dueDate: new Date(),
                completed: false }
  ];

  $scope.item = { text: "",
                dueDate: new Date(),
                completed: false };

}]);
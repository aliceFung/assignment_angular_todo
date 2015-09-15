var app = angular.module("todo",[]);

app.controller("TodoCtrl", ["$scope", function($scope){

  $scope.items = [];
  $scope.item = { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: false };

}]);
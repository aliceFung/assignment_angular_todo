var app = angular.module("todo",[]);

app.controller("TodoCtrl", ["$scope", "$window", function($scope, $window){

  $scope.createItem = function(){
    console.log($scope.item.text + " due " + $scope.item.dueDate + " completed: " + $scope.item.completed);
    $scope.items.push($scope.item);

    // clearing input
    $scope.item = { text: "",
                dueDate: new Date(),
                completed: false };
    // $window.alert('something pops up');
  };

  $scope.deleteItem = function(index){
        $scope.items.splice(index,1);
  };

  $scope.clearCompleted = function(){
    $scope.items = $scope.items.filter(function(item){
        return !item.completed
    })
  }

  $scope.items = [
  { text: "Get groceries from the store",
                dueDate: new Date(),
                completed: true },

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
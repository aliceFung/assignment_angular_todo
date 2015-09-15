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
    //selects subset of array and returns new array
    $scope.items = $scope.items.filter(function(item){
        //keep whatever you return
        return !item.completed;
    });
  };

  $scope.completionDisplay = function(){
    $scope.completion.display = !($scope.completion.display);
    if ($scope.completion.display){
      $scope.completion.text = "Hide Completed";
    } else {
       $scope.completion.text = "Show Completed";
    }
  };

  $scope.completion = { display: true,
                        text: "Hide Completed"};

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
app.controller("TodoCtrl", ["$scope", "$window", "todoService", function($scope, $window, todoService){

  $scope.createItem = function(){
    console.log($scope.item.text + " due " + $scope.item.dueDate + " completed: ");
    todoService.createItem($scope.item);

    // clearing input
    $scope.item = { text: "",
                dueDate: new Date(),
                completed: false };
    // $window.alert('something pops up');
  };

  $scope.deleteTodo = function(item){
    console.log("delete item: " )
   todoService.deleteTodo(item);
  };

  $scope.clearCompleted = function(){
   todoService.clearCompleted();
   $scope.items = todoService.getItems();
 }

  $scope.toggleCompletedDisplay = function(){
    $scope.completion.display = !($scope.completion.display);
    if ($scope.completion.display){
      $scope.completion.text = "Hide Completed";
    } else {
       $scope.completion.text = "Show Completed";
    }
    console.log($scope.items.length);
  };

  // if true, show completed
  $scope.showItem = function(){
    return function(item){
      //return true if display true
      if ($scope.completion.display){
        return true;
      } else {
        if(item.completed){
          return false;
        }else{
          return true;
        }
      }
      //return false if display false && incomplete
      return $scope.completion.display;
    };
  };

  //if true, completed task are shown
  $scope.completion = { display: true,
                        text: "Hide Completed"};

  $scope.items = todoService.getItems();

  $scope.item = { text: "",
                dueDate: new Date(),
                completed: false };

}]);
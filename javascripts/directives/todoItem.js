app.directive("todoItem", function(){

  return {
    restrict: 'A',
    scope: {
      itemObj: '=',
      deleteTodo: '&'
    },
    templateUrl: 'javascripts/directives/todoItem.html'
  };

});
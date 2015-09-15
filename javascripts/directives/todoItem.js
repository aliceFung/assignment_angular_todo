app.directive("todoItem", function(){

  return {
    restrict: 'A',
    scope: {
      itemObj: '=',
      // deleteItem: '&'
    },
    templateUrl: 'javascripts/directives/todoItem.html'
  };

});
app.directive("todoItem", function(){

  return {
    restrict: 'A',
    scope: {
      item: '='
    },
    templateUrl: 'javascripts/directives/todoItem.html'
  };

});
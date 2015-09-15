var app = angular.module("todo",[]);

app.filter("showCompleted", function(){

  return function(input, show_option){
    var filtered = [];

    angular.forEach(input, function(item){

      //show everything
      if(show_option){
        filtered.push(item);
      } // hide completed === only show incomplete items
      else if (!item.completed) {
        filtered.push(item);
      }
    });

    return filtered;
  };

});


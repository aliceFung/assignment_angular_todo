app.factory('todoService', function(){

  var obj = {};

  var _items = [];

  obj.getItems = function(){
    return _items;
  };

  obj.createItem = function(item){
    console.log( item , _items);
    item.completed = false;
    _items.push(item);
  };

  obj.deleteTodo = function(item){
    console.log(item)

     var index = _items.indexOf(item);
     _items.splice(index,1);
  };

  obj.clearCompleted = function(){
    //selects subset of array and returns new array
    console.log(_items)
    _items = _items.filter(function(item){
        //keep whatever you return
        return !item.completed;
    });
  };

  return obj;

});
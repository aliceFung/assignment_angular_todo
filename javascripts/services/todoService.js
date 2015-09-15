app.factory('todoService', function(){

  var obj = {};

  var _items = [
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

  obj.getItems = function(){
    return _items;
  };

  obj.createItem = function(item){
    item.completed = false;
    _items.push(item);
  };

  obj.deleteItem = function(index){
    obj._items.splice(index,1);
  };

  obj.clearCompleted = function(){
    //selects subset of array and returns new array
    obj._items = _items.filter(function(item){
        //keep whatever you return
        return !item.completed;
    });
  };

  return obj;

});
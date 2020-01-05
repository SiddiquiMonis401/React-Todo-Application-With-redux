import React from 'react';
import { useSelector } from 'react-redux'
import Todo from './Components/Todo'
import AddTodo from './Components/AddTodo';



function App() {
  var item= useSelector(state => state.TodoReducer);
  
  return (
    <div className="App">
      <h1>Todo App With React</h1>
      <AddTodo />
      {
        item.map((item,index)=>(
          <Todo  key={item.id} todo={item} index={index} />
         ))
      }
      
    </div>
  );
}

export default App;

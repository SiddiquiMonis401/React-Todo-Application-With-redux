import React from 'react';
import { useSelector } from 'react-redux'




function App() {
  const item= useSelector(state => state.AddReducer);
  console.log(item)
  return (
    <div className="App">
          
      
    </div>
  );
}

export default App;

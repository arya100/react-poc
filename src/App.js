import React, { useState, useMemo } from 'react';
import './App.css';

import Child from './component/Child'

function App() {
  const  [i, setI] = useState( 0 )

  function handleClick (){
    setI(i + 1);
  }

  const memoChild = useMemo(()=>{
   return <Child></Child> 
  }, [i])

  return (
    <div className="App">
      <header className="App-header">
        <h3>React Memo</h3>
        <h2>Intial: {i}</h2>
        <button onClick={handleClick}>adding State</button>
        <h3>Child Render</h3>
        <Child></Child>
        <h3>Memo Render</h3>
          {memoChild}
      </header>
    </div>
  );
}

export default App;

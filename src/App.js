import React, {createContext}from 'react';
import './App.css';
//import ListContaniner from './common/container/listContanier';

export const conterContext = createContext()
const initialState = {
  TodoList : [
      {
          id: 1,
          name: "vikku"
      },
      {
          id: 2,
          name: "sri"
      },
      {
          id: 3,
          name: "arya"
      }
  ],

}
const reducer = (state,action) =>{
  switch(action){
    case "ADD"
  }

}

const handleSubmit = (e) => {
  e.preventDefault()
}


const App=() => { 
  return (
    <div className="App">
        <form onSubmit={handleSubmit}>
          <input 
            required
            placeholder="add new todo"
          />
        </form>
        <button>Clear</button>

      
    </div>
  );
}

export default App;

//****intial todo list with react redux with add edit and delet */
// const App=() => { 
//   return (
//     <div className="App">
      
//         <ListContaniner/>
      
//     </div>
//   );
// }

// export default App;


// ******** Counter *******
// export const conterContext = createContext()

// const App=() => {
//   return(
//     <conterContext.Provider value={"inputValue"}>
//     <div>
//     <Counter/>
//   </div>

//   </conterContext.Provider>
//   )
  
//   };

import React ,{useReducer,useRef,useEffect,useContext}from "react";
import {conterContext} from "../../App"

const Counter =() =>{
    const reducer = (state, action) => {
        switch (action) {
          case 'increment': return state + 1;
          case 'decrement': return state - 1;
          case 'reset': return 0;
          default: throw new Error('Unexpected action');
        }
      };
      const inputRef = useRef("")
      const counterEl = useRef(null)
      const store = useContext(conterContext)
      useEffect(()=>{
        console.log(counterEl.current)
        console.log('check for store', store)
        inputRef.current.focus()
      })
      const [ value,dispatch] = useReducer(reducer, 0);
      return (
        <div>
          <input ref={inputRef}></input>
          <span ref={counterEl}>{value}</span>
          <button onClick={() => dispatch('increment')}>+1</button>
          <button onClick={() => dispatch('decrement')}>-1</button>
          <button onClick={() => dispatch('reset')}>reset</button>
        </div>
      );
}

export default Counter;


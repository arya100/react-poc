import React from 'react';


import { useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from '../../actions/dataActions'


function Counter() {

  const dispatch = useDispatch();
  const counter = useSelector( (state) => {
    console.log("prtin whole state .. ", state)
    return state.test.counter})
  
  return (
    <div >
      
        <h1>counter : { counter }</h1>
        <button onClick = {(() => dispatch(increment()))}>INCREMENT</button>
        <button onClick = {(() => dispatch(decrement()))}>DECREMENT</button>
     
    </div>
  );
}

export default Counter;

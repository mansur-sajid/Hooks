import React, { useState, useReducer, useEffect, useRef} from 'react';

let reducer = (state, action) =>{
  switch (action.type){
    case "increment":
      return {num : state.num +1, show: state.show};
    case "hide":
      return {num: state.num, show : !state.show};
    default:
      return {state}
  }
}

function Test() {
  let hi = (e) =>{
    setCount(!count);
    console.log(count);
  }
  const [count, setCount] = useState(true);
  const [state, dispach] = useReducer(reducer, {num: 0, show : true});
  const inref = useRef(null);
  useEffect(()=>{
    console.log("HI");
  });
  let change = () => {
    inref.current.focus();
    inref.current.style.backgroundColor = "red";
  }
  return (
    <>
    <button onClick={()=>{dispach({type: "hide"})}}>click me!</button> {state.show && <div>daedd</div>}
    <button onClick={()=>{dispach({type: "increment"})}}>click me!</button> {state.num}
    <textarea ref={inref} cols="30" rows="10"></textarea>
    <button onClick={change}>click</button>
    </>
  );
}

export default Test;
import { useState } from "react";



export default function Counter({fun}) {
    let [value ,setValue]=useState(0);
    function inc(){
    setValue(++value);
    fun(value)
  }
  function dec(){
    setValue(--value);
    fun(value)
  }
  return (
     <div>
      <button onClick={inc}>+</button>
      <p>{value}</p>
      <button onClick={dec}>-</button>
     </div>
  )
}

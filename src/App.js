import React from 'react'

const App = () => {
  
 function getInput(event)
  {
console.log(event.target.value);
  }
const addNums=(a,b)=>{
  console.log(a+b);
}
  return (
    <div>
    <h1>Event Handling</h1>
    <input placeholder='Type something here' onChange={getInput}></input>
    <button onClick={()=>{addNums(10,19)}}>Sum of two num</button>
    </div>
  )
}

export default App
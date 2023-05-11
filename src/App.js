import "./App.css";
import React, { useState } from 'react'
import Child from "./Child";


const App = () => { 
    const [name, setName]= useState("Sumit Chaurasiya");
function changename(val){
  setName(val)
}

  return (
    <div>
<h1>Parent Component</h1>
<Child data={name} funname={changename}/>
{/* <button onClick={()=>{setName("Front End Developer")}}>changename</button> */}
    </div>
  )
}

export default App
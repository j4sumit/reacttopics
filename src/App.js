import "./App.css";
import React, { useState } from 'react'
import Child from "./Child";


const App = () => { 
    const [name, setName]= useState("Sumit Chaurasiya");
  return (
    <div>
<h1>Parent Component</h1>
<Child value={name}/>
<button onClick={()=>{setName("Front End Developer")}}>changename</button>
    </div>
  )
}

export default App
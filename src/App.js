import React, {useState} from 'react';

import './App.css';
// import Student from './Student';

function App(){
  const[data, setDate]=useState("Sumit");
  const[print, setPrint]=useState(false);
  function getData(val){
    console.log(val.target.value)
    setDate(val.target.value);
    setPrint(false);
  }
  return(
    <div className='App'>
    
     { print? <h1>{data}</h1> : null}
    
    <input type="text" onChange={getData}/>
    <button onClick={()=>setPrint(true)}>Print   Data</button>
    </div>
  )
};

export default App;

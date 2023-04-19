import React,{useState} from 'react';


import './App.css';


function App(){
  const[status, setStatus] = useState(true);
  return(
    <div className='App'> 
      {
       status? <h1>hello world</h1> : null   
      }
    {/* <button onClick={()=> setStatus(false)}>Hide </button>
    <button onClick={()=> setStatus(true)}>Show</button> */}
    <button onClick={()=> setStatus(!status)}>toggle </button>

    </div>
  );
};

export default App;

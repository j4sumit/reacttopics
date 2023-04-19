import React,{useState} from 'react';


import './App.css';


function App(){
  const[name,setName]= useState("");
  const[tnc,setTnc]= useState(false);
  const[interest,setInterest]= useState("");
  function getFormData(e)
  {
    console.warn(name, tnc, interest)
e.preventDefault()
  }
   return(
    <div className='App'> 
  <h1>Handle form in react</h1><br/><br/>
  <form onSubmit={getFormData}>
    <input type="text" placeholder='Enter name' value= {name} onChange={(e)=> setName(e.target.value)}/> <br/><br/><br/>
    
    <select onChange={(e)=> setInterest(e.target.value)}>      
      <option>Option</option>
      <option>Marwal</option>
      <option>DC</option>
      </select><br/><br/>
     <input type="checkbox" onChange={(e)=> setTnc(e.target.checked)} /> <span>Accept Terms and condition</span>
    <br/><br/>
    <button type='Submit'>Submit</button>
    
  </form>
      </div>
  );
};

export default App;

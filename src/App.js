import "./App.css";
import React, {useState} from 'react';

const App = () => {
  const[inputs, setInputs] =useState({})
  const getInputValues=(data)=>{
let {name, value} =data.target ;
let item ={[name]: value};
setInputs({...inputs, ...item});
  }
  console.log(inputs);
  return (
    <div>
      <input placeholder='Enter you name' name="name" 
      onChange={getInputValues}
      />
      <input placeholder='Enter you Age' name="age"
      onChange={getInputValues}
       />
      
      <input placeholder='Enter your experience' name="eyo"
      onChange={getInputValues}
      /> 
      <button type='submit'>Submit</button>
    </div>
  )
}

export default App
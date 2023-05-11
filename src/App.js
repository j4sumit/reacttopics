import React, { useState } from 'react'

const App = () => {
  const[objdata, setObjdata]= useState({});
  const getInputs =(value,name)=>{
    // console.log({[name] : value});
    let data= {[name] : value};
    setObjdata({...objdata, ...data});
  };

  const submit =(event)=>{
    event.preventDefault();
    console.log(objdata);
  }
console.log(objdata);
  return (
    <form onSubmit={submit}>
    <div>
      
      <input placeholder='Enter you name'
      name='name'
      type="text"
       onChange={(event)=> getInputs(event.target.value, event.target.name)}
       />

      <input placeholder='Enter you Age'
      name='age'
      type="number"
      onChange={(event)=> getInputs(event.target.value, event.target.name)}
      />
      <input placeholder='Enter you hobbies'
      name='hobbies'
      type="text"
      onChange={(event)=> getInputs(event.target.value, event.target.name)}
      />
      <input placeholder='Enter a date'
      name='date'
      type="date"
      onChange={(event)=> getInputs(event.target.value, event.target.name)}
      />
      <button type='submit'>Submit</button>
      <button type='reset'>Reset</button>
    </div>
    </form>
  )
}

export default App
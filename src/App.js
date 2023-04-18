import React,{useState} from 'react';

import './App.css';
import Student from './Student';
function App(){
  const[name, setName]= useState("Sumit");
  return(
  <div className='App'>
    <h1>{name}</h1>
    <Student name={name}/>
     {/* <Student name={"Sunil"} Email="sunit@gmail.com" other={{address: "mumbai", mobile:"8888888888888"}}/>
    <Student name={"Sumit"} Email="sumit@gmail.com" other={{address: "patna", mobile: "88888"}}/> */}
      <button onClick={()=> {setName("Amit")}}>update name</button>
      </div> 
);
}
export default App;

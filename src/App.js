// import React,{Component} from 'react';

import './App.css';
// import User from './User'

function App() {
  let data ="Sumit Chaurasiya";
function apple(){
  data ="Amit Chaurasiya";
  alert(data);
}
  return (
    <div className="App">
      <h1>{data}</h1>
    <button onClick = {apple}> Click me </button>
    
    </div>
  );
}


export default App;

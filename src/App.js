// import React,{Component} from 'react';

import './App.css';
import User from './User'
function App() {
function Inner()
{
  return(
    <h1>Inner function</h1>
  )
}
  return (
    <div className="App">
      <h1>Hello world  </h1>
      <User />
      {Inner()}
    </div>
  );
}


export default App;

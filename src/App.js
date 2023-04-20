import './App.css';
import React from "react";
import User from './User';
import Members from './Members';

function App()
{
function getData()
{
  alert("hellow from App");
}


  return(
<div className='App'>
  <User data={getData}/>
  <div>
  <Members data={getData}/>
  </div>
    </div>
  )
}
export default App;

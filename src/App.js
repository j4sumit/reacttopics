import './App.css';
import React from "react";
// import User from './User';
// import Members from './Members';
// import { render } from '@testing-library/react';

class App extends React.Component
{

  constructor(){
    super();
this.state={
  name:"sumit"

}
console.log("constructor");
}
componentDidUpdate()
{
  console.log(" componet did update")
}
render()
{
console.log("render");
  return(
    <div className='App'>
      <h1>Component did update {this.state.name}</h1>
      <button onClick={()=> {this.setState({name:"chaurasiya"})}}>update name</button>
    </div>
  );
}

}
export default App;

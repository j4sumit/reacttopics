import React from 'react';

import './App.css';
import Student from './Student';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      name:"Sumit"
    }
  }
  render()
  {
    return(
      <div className='App'>
        <h1> Prps in class Component</h1>
        <Student name={this.state.name} Email="Sumit@gmail.com"/>
       <button onClick={()=>this.setState({name:"Amit"})}>update name</button>
    
      </div>
    )
    
  }
}
export default App;

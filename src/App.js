import './App.css';
import React from 'react';
import './Style.css';
import style from './custom.module.css';

function App() 
{
  return(
    <div className='App'>
      <h1 className='primary'>Style in React</h1>
      <h1 style={{color:'red', backgroundColor:'yellow'}}>Style in React</h1>
      <h1 className={style.success}>Style in React</h1>
      
    </div>
    );
}
export default App;
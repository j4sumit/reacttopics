import './App.css';
import React,{useRef} from 'react';
import User from './User';
function App()
{
    let inputRef=useRef(null);
    function updateInput()
    {
        inputRef.current.value="100";
        inputRef.current.style.color="blue"
        inputRef.current.focus();
    }

    return(
        <div className='App'>
            <h1>forwardRef in React</h1>
            <User ref={inputRef}/>
            <button onClick={updateInput}>Update InputBox</button>
        </div>
    )
}

export default App;
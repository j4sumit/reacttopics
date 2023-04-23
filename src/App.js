import './App.css';
import React,{useRef} from 'react';

function App()
{
    let inputRef = useRef(null);
    function handleInput()
    {
console.warn("function called");
inputRef.current.value="1000";
inputRef.current.focus();
inputRef.current.style.color="red";
inputRef.current.style.display="none"
}

    return(
        <div className='App'>
            <h1>Use ref in function component</h1>
            <input type="text" ref={inputRef}/>
            <button onClick={()=>handleInput()}>Handle input</button>

        </div>
    )
}

export default App;
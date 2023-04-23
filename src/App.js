import './App.css';
import React,{useRef} from 'react';



function App()
{

    let inputRef=useRef(null);
    let inputRef1=useRef(null);

    function submitForm(e)
    {
        e.preventDefault();
        console.warn("input field value: ",inputRef.current.value)
        console.warn("input field value: ",inputRef1.current.value)
    }
    return(
        <div className='App'>
            <h1>UnControlled component</h1>
            <form onSubmit={submitForm}> 
            <input ref={inputRef} type="text"/>
            <input ref={inputRef1} type="text"/>
            <button>submit</button>
            </form>
    
        </div>
    )
}

export default App;
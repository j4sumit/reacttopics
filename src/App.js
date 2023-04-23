import './App.css';
import React,{useState} from 'react';


function App()
{
    let[val, setVal] = useState("00");
    let[item, setItem] = useState("");
    return(
        <div className='App'>
            <h1>Controlled component</h1>
            <input type="text" defaultValue ="please enter here" onChange={(e)=>setVal(e.target.value)}/>
            <input type="text" defaultValue ="please enter here" onChange={(e)=>setItem(e.target.value)}/>
            <h2>Value: {val}</h2>
            <h2>Item : {item}</h2>

        </div>
    )
}

export default App;
import {  useState } from 'react';
import "./App.css";

const App = () => {
const [count, setCount] =useState(0);
const [visible, setVisible] =useState(false);

const handleIncrement =()=>{
    setCount(count+1);
    setVisible(!visible);
}

const handleDecrement =()=>{
    setCount(count-1);
}
    return (
        <div className="App">

<h1> you coust is : {count} </h1>     
{visible? <h1>Visible </h1> : <h1>Not visible</h1>}
<button onClick={handleIncrement}>Increment </button>
<button onClick={handleDecrement}>Increment </button>
        </div>
    )

}

export default App
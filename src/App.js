import React from "react";
import './App.css';
import User from "./User";
function App()
{
    function parentalert(data)
    {
alert(data.email);
    }
    
    return(
        <div className="App">
            <h1>Lifting up state</h1>
            <User alert={parentalert}/>
        </div>

    )
}
export default App;


import './App.css';
import React,{useState} from 'react';
function App()
{

    return(
        <div className='App'>
            <h1>HOC (Higher order component)</h1>
    <HOCRed CMP = {Counter}/>
    <HOCGreen CMP = {Counter}/>
    <HOCBlue CMP = {Counter}/>

        </div>
    )
}

function HOCRed(props)
{
    return <h2 style={{backgroundColor: "red", width:100}}> Red <props.CMP/></h2>

}

function HOCGreen(props)
{
    return <h2 style={{backgroundColor: "Green", width:100}}>Green <props.CMP/></h2>

}

function HOCBlue(props)
{
    return <h2 style={{backgroundColor: "blue", width:100}}>Blue <props.CMP/></h2>

}


function Counter()
{
    const[count,setCount]=useState(0);
    return(
        <div>
        <h3>{count}</h3>
        <button onClick={()=> setCount(count+1)}>update</button>
        </div>
    )
}

export default App;
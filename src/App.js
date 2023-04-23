import './App.css';
import React,{createRef} from 'react';
class App extends React.Component
{
    constructor()
    {
        super();
        this.inputref=createRef()
        
    }
    componentDidMount()
    {
        console.warn(this.inputref.current.value="1000");
    }

    getVal()
    {
console.log(this.inputref.current.value);
this.inputref.current.style.color="red"
this.inputref.current.style.background="black";
    }
    render()
    {
     return(
         <div className='App'>
             <h1>Ref in React</h1>
             <input type="text" ref={this.inputref} />
             <button onClick={()=>this.getVal()}>Check ref</button>

         </div>
     )   
    }
}

export default App;
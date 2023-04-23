// import React from "react";
import { From } from "react-bootstrap";
import './App.css';
// import User from "./User";

import React,{PureComponent} from "react";
class App extends PureComponent
{
 
    constructor()
    {
        super();
        this.state={
            count:1
        }
    }
    render()
    {
        console.log("check rerendering");
        return(
            <div className="App">
            <h1>Pure Component in React {this.state.count}</h1>
            <button onClick={()=>this.setState({count: this.state.count+1})}>update cuount</button>
            </div>
        )
    }
    

}
export default App;


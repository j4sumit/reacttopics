// import React from "react";
// import { From } from "react-bootstrap";
import './App.css';
import User from "./User";
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
     
        return(
            <div className="App">
     <User count={this.state.count}/>
            <button onClick={()=>this.setState({count: this.state.count})}>
                update cuount
                </button>
            </div>
        )
    }
}
export default App;


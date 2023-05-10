import "./App.css";
import React,{Component} from "react";

export default class App extends Component  {
    constructor(){
super();
this.state= {name: "Sumit",};
    }
    render()
    {

    return (<div>{this.state.name}</div>)
          
        
    }
    
}

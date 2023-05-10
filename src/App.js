import "./App.css";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();
        this.state = { name: "Amit",
    age: 28,
arr: [1,2,3,4,5,6,7,8,9], };  
    }
     changeage = ()=>{
         this.setState({age : this.state.age * 2});
        };

    render() {
        return(
            <div className="App">
            <h1>{this.state.name}</h1>
            <h1>{this.state.age}</h1>
            <h1>{this.state.arr.map((num)=> num *2)}</h1>
            <button onClick={this.changeage}>New Age</button>
            </div>
        )
    }

}

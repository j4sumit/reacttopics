// import { from } from "react-bootstrap";
import './App.css';
// import User from "./User";

import React from "react";
class User extends React.Component
{
 
    render()
    {
      console.warn("user component check rerendering");
        return(
            <div className="App">
            <h1>User Component {this.props.count}</h1>
            
            </div>
        )
    }
    }
export default User;
import './App.css';
import React from 'react';
import User from './User';
import { BrowserRouter as Router, Link, Route,Routes } from 'react-router-dom';
function App() {

    let users = [
        {id:1, name:"Sunit", mail:'j4sumit@gmail.co'},
        {id:2, name:"Aunit", mail:'Amint@gmail.co'},
        {id:3, name:"Sanjay", mail:'Sanjay@gmail.co'}
    ]
    return (
        <div className='App'>
            <Router>
<h1>Dynamic Routing</h1>
{
users.map((item)=> 
<div><Link to={"/user/"+ item.id}><h3>{item.name}</h3></Link></div>)
}
<Routes>
<Route path="/user/:id" element= {<User />}/>
            
            </Routes>
            </Router>
        </div>
    );
}


export default App;

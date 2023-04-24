import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Router>
                <Link to="/home">Home page</Link>
                <Link to="/about">about page</Link>
                <Routes>
                  <Route path="/home"><Home /> </Route>
                <Route path="/about"><About /> </Route>
                </Routes>


            </Router>
        </div>
    );
}

function Home() {
    return (
        <div>

            <h2>this is the home page</h2>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About Page</h1>
            <h2>this is the home page</h2>
        </div>
    )
}
export default App;


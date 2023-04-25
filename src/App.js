import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
function App() {
    return (
        <div className='App'>
            <Router>
                <Link to="/">Home page</Link>
                <br />
                <Link to="/about">about page</Link><br/>
                <Link to="/login">Login page</Link>
                <Routes>
                    <Route path="/" exact ={true} element={<Home />} />

                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<PageNotFound />} />

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
function PageNotFound() {
    return (
        <div>
            <h1>404 Page</h1>
            <h2>this is not found</h2>
        </div>
    )
}

export default App;

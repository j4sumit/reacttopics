import React from 'react'
import { useEffect } from 'react';
import "./App.css";

const App = () => {
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => console.log(json));
    }, []);
    return (
        <div className='App'>
            <h1>users</h1>
            <div className='card'>
                <div className='"card-inner'>
                    <p>Sumit </p>
                    <p>Chaurasiya</p>
                </div>
                
            </div>

        </div>
    )
}

export default App
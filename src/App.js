import React from 'react'
import { useEffect, useState } from 'react';
import "./App.css";

const App = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((json) => setUser(json));
    }, []);


    // const myData =() =>{
    //     let newarray =users.map((user)=> user.id *2);
    //     console.log(newarray);
    // }

    const myData =() =>{
        let newarray =users.filter((user)=> {
//  return user.name === "Leanne Graham";
// return user.name.includes("a");
return user.id <= 5;
        });
setUser(newarray);
    }

    return (
        <div className='App'>
            {
                users.map((user) =>
                    <div>
                        {user.name}
                    </div>
                )

            }
                            <button onClick={myData}>Submit</button> 
        </div>
    )
}

export default App
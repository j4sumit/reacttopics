import { Button } from 'bootstrap';
import React from 'react'
import { useEffect, useState } from 'react';
import "./App.css";

const App = () => {

    // const [users, setUser] = useState([]);
    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //         .then((response) => response.json())
    //         .then((json) => setUser(json));
    // }, []);


    // const myData =() =>{
    //     let newarray =users.map((user)=> user.id *2);
    //     console.log(newarray);
    // }

    // const myData =() =>{
    //     let newarray =users.filter((user)=> {
//  return user.name === "Leanne Graham";
// return user.name.includes("a");
// return user.id <= 5;
//         });
// setUser(newarray);
//     }
const [numbers, setNumbers] = useState([1,2,3,4,5,6,7,8,9]);
const myData= ()=>{
    let numberlessthan5 = numbers.filter((num)=> num<5).map((filterdata)=> filterdata*filterdata);
    setNumbers(numberlessthan5); 
}

    return (
        <div className='App'>
            {
                numbers.map((number) =>
                    <div>
                        {number}
                    </div>
                )

            }
<button onClick={myData}>Result</button>              
        </div>
    )
}

export default App
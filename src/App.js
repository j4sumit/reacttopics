import React, {useEffect, useState} from 'react'

const App = () => {
const[message, setMessage] =useState("");
  // useEffect(()=>{
  //   let Age=37;
  //   let name="Sumit";
  //   Age>35 ? console.log("you are too older"): 
  //   Age===28 && name==="Sumit" ? 
  //   console.log("your age and name has been matched") : 
  //   console.log("your age is below 28")
  // },[])
useEffect(()=>{
  let Age=38;
let name="Sumit";
  Age > 35 ? setMessage("you are too older"): 
  Age===28 && name==="Sumit" ? 
  setMessage("your age and name has been matched") : 
  setMessage("your age is below 28")
},[])

  return (
    <>
    <h1>Inline conditional expression</h1>
    <h2>message as per given data  ::   {message}</h2>
    </>
 
  )
}

export default App

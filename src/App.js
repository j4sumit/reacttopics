import React from 'react'

const App = () => {
  // useEffect(()=>{
  //   let Age=37;
  //   let name="Sumit";
  //   Age>35 ? console.log("you are too older"): 
  //   Age===28 && name==="Sumit" ? 
  //   console.log("your age and name has been matched") : 
  //   console.log("your age is below 28")
  // },[])
  let Age=38;
let name="Sumit";
  return (
    <div >
    <h1>Inline conditional expression</h1>
{
    Age > 35 ? <h1>you are too older</h1>: 
    Age===28 && name==="Sumit" ? 
   <h1>your age and name has been matched</h1>:
   <h1>your age is below 28</h1>
  
}

    
    </div>
 
  )
}

export default App
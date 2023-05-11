import React, {useEffect} from 'react'

const App = () => {

  useEffect(()=>{
    let Age=37;
    let name="Sumit";
    Age>35 ? console.log("you are too older"): 
    Age===28 && name==="Sumit" ? 
    console.log("your age and name has been matched") : 
    console.log("your age is below 28")
  },[])
  return (
    <div>Inline conditional expression</div>
 
  )
}

export default App

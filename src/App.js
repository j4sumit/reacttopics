import React from 'react'

const App = () => {
  const details =[
  {
    Name: "sumit",
    Age : 28,
  },
 {
   Name:"Amit",
   Age : 30,
 },
 {
   Name:"sanjay",
   Age: 35
 },
 {
   Name:"Raju",
   Age: 24,
 }
]
  return (
    <div>
    <ul>
    {details.map((data,index) => {
return (
<div key={index}>
<li>{data.Name} </li>
<li>{data.Age}</li>
</div>
    )})}
    </ul>
    </div>
  )
}

export default App
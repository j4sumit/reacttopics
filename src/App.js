import './App.css';
import React from 'react';
function App()
{
  // const student =['anil','siddhu','sam','peter'];
  
  const student=[
{
  name:"sumit",
  contact: 1111111111,
  email: "xyz@gmail.com"
},
{
  name:"Amit",
  contact: 222222222,
  email: "abc@gmail.com"
},

{
  name:"raju",
  contact: 44444444,
  email: "raju@gmail.com"
}

  ]

  return(
    <div className='App'>
      <h1>Handle array with List</h1>
      <table border="1">
      <tr >
        <th> name </th>
        <th> contact </th>
        <th> email</th>
        </tr>
        {
        student.map((data)=> 
        <tr>
          <td> {data.name} </td>
          <td> {data.contact} </td>
          <td>  {data.email}</td>
          </tr>
        )}
</table>


    </div>
  )
}

export default App;

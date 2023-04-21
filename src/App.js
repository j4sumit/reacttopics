import './App.css';
import React from 'react';
import {Table} from 'react-bootstrap';
function App()
{
  // const student =['anil','siddhu','sam','peter'];
  
  const student=[
{ name:"sumit",  contact: 1111111111,  email: "xyz@gmail.com"},
{ name:"Amit",  contact: 222222222,  email: "abc@gmail.com"},
{  name:"raju",  contact: 111,  email: "raju@gmail.com"}
]

  return(
    <div className='App'>
      <h1>List with bootstrap</h1>
      <Table striped variant='dark'>
<tbody>
          <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          </tr>
{
  student.map((item,i)=>
  /*<tr key={i}>
   <td>{item.name}</td>
  <td>{item.contact}</td>
  <td>{item.email}</td> */
item.contact===222222222?  
<tr key={i}>
  <td>{item.name}</td>
  <td>{item.contact}</td>
  <td>{item.email}</td>
  </tr> : null
  )
}
</tbody>
        </Table>

    </div>
  )
}

export default App;

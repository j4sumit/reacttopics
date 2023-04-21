import './App.css';
import React from 'react';
import {Table} from 'react-bootstrap';
function App()
{
  // const student =['anil','siddhu','sam','peter'];
  
  const student=[
{ name:"sumit",  contact: 1111111111,  email: "xyz@gmail.com",
address:[
  {HN:"10", city:"noida",country:"india"},
  {HN:"100", city:"noidaa",country:"indiaa"},
  {HN:"1000", city:"noidaa",country:"indiaaa"}
]},
{ name:"Amit",  contact: 222222222,  email: "abc@gmail.com", address:
[
  {HN:"10", city:"noida",country:"india"},
  {HN:"100", city:"noidaa",country:"indiaa"},
  {HN:"1000", city:"noidaa",country:"indiaaa"}
]},
{  name:"raju",  contact: 111,  email: "raju@gmail.com",address:
[
  {HN:"10", city:"noida",country:"india"},
  {HN:"100", city:"noidaa",country:"indiaa"},
  {HN:"1000", city:"noidaa",country:"indiaaa"}
]}
]

  return(
    <div className='App'>
      <h1>List with nested arry</h1>
      <Table striped variant='dark'>
        <tbody>
          <tr>
          <td>Sr no.</td>
            <td>Name</td>
            <td>Email</td>
            <td>address</td>
            
          </tr>
          {
            student.map((item,i)=>
            <tr key={i}>
              <td>{i}</td>
            <td>{item.name}</td>
            <td>{item.contact}</td>
            <td>{item.email}</td>
            
            <td>
             {
               item.address.map((data)=>
               <tr>
               <td>{data.HN}</td>
               <td>{data.city}</td>
               <td>{data.country}</td>
               </tr>
 
               )
             } 
            </td>
            </tr>
            )
          }
        </tbody>
        </Table>
    </div>
  )
}

export default App;

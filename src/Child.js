import React from 'react'

const Child = ({data, funname}) => {
  return (
    <div>
        <h1>Child component</h1>
        <h1>{data}</h1>
        <button onClick={()=>{funname("Value has been change by child component")}}>Change name</button>


    </div>
  )
}

export default Child
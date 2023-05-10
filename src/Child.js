import React from 'react'

const Child = (props) => {
  return (
    <div>
        <h1>Child component</h1>
        <h1>{props.value}</h1>

    </div>
  )
}

export default Child
import React from 'react';
function Members(props)
{
return(
    <div>
        <h1>Member component </h1>
        <button onClick={()=> alert("props.data1")}>call data function</button>
 
    </div>
)
}
export default Members;